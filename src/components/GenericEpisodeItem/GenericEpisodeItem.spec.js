import { shallowMount } from '@vue/test-utils'
import GenericEpisodeItem from './GenericEpisodeItem'

const setup = (episode = 's01e02') => {
  const wrapper = shallowMount(GenericEpisodeItem, {
    propsData: {
      episode: episode,
      name: 'Second episode'
    }
  })

  return wrapper
}

describe('GenericEpisodeItem', () => {
  it('renders correct episode in humanized format', () => {
    const wrapper = setup()

    expect(wrapper.find('.episode-item__num').text()).toBe('Episode 2')
  })

  it('renders episode title', () => {
    const wrapper = setup()

    expect(wrapper.find('.episode-item__name').text()).toBe('Second episode')
  })
})
