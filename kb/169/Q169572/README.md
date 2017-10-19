---
layout: page
title: "Q169572: No Speech in Talk It! With Sound Blaster 32 or AWE 64"
permalink: /kb/169/Q169572/
---

## Q169572: No Speech in Talk It! With Sound Blaster 32 or AWE 64

	Article: Q169572
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbinterop kbsound
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Talk It! to produce speech using a Creative Labs sound
	card, no sound is heard.
	
	CAUSE
	=====
	
	This problem occurs if you are using a Creative Labs Sound Blaster 32 or Sound
	Blaster AWE 64 sound card and you have fully installed the Sound Blaster support
	software. In some cases, the Sound Blaster software replaces the Microsoft ADPCM
	CODEC with the Creative ADPCM CODEC.
	
	The Microsoft ADPCM CODEC is required for playing back speech in Talk It! The
	Creative ADPCM CODEC does not allow speech playback in Talk It!
	
	
	RESOLUTION
	==========
	
	Use the following steps to disable the Creative ADPCM CODEC and then verify that
	the Microsoft ADPCM CODEC is enabled:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Advanced tab, click the plus sign (+) to the left of Audio Compression
	  Codecs to expand the branch.
	
	4. Locate the Creative ADPCM CODEC.
	
	  Note: If this codec is present, please continue to Step 5. If this codec is
	  not present; this article does not apply to your problem. For more
	  information about possible solutions to this problem, please refer to the
	  following article in the Microsoft Knowledge Base.
	
	  Q133365 Windows 95: Troubleshooting Problems with Compressed Audio
	
	5. Select the Creative ADPCM CODEC and the click the Properties button.
	
	6. Select Do Not Use This Audio Codec and then click OK.
	
	7. Select the Microsoft ADPCM CODEC and then click the Properties button.
	
	8. Verify that Use This Audio Codec is selected (if not, select it) and then
	  click OK.
	
	9. Click OK to exit Multimedia Properties.
	
	10. Click the Start button, click Shut Down, select Restart The Computer, and
	  then click the Yes button to reboot your computer. When the reboot is
	  complete, try Talk It! You should now hear speech.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbsound 
	Technology        : _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
