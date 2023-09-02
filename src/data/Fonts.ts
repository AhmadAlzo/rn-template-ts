import {
  FontAwesome,
  Ionicons,
  Entypo,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

type IconSet = typeof FontAwesome.font | typeof Ionicons.font | typeof Entypo.font |
  typeof SimpleLineIcons.font | typeof MaterialIcons.font | typeof MaterialCommunityIcons.font;

const iconSets: IconSet[] = [
  FontAwesome.font,
  Ionicons.font,
  Entypo.font,
  SimpleLineIcons.font,
  MaterialIcons.font,
  MaterialCommunityIcons.font,
];

export default iconSets;