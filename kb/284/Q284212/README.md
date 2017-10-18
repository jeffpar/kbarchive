---
layout: page
title: "Q284212: Games Err Msg: Stop: Failed - Create Sound Buffer"
permalink: kb/284/Q284212/
---

## Q284212: Games Err Msg: Stop: Failed - Create Sound Buffer

	Article: Q284212
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Links 2001 
	- Microsoft MechCommander 2.0, version 1.0 
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft MechWarrior 4: Vengeance, you may receive
	the following error message:
	
	  STOP:FAILED - (WINERR_one or more arguments are invalid) - Create Sound
	  Buffer
	
	When you attempt to start Microsoft Links 2001, you may receive the following
	error message:
	
	  STOP: FAILED (0x8878001e - DSERR_CONTROLUNAVAIL) - CreateSoundBuffer
	
	CAUSE
	=====
	
	This behavior can occur if you have conflicting audio codecs installed on your
	compouter, or if one or more of the audio codecs are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Remove and Reinstall the Audio Compression Drivers
	--------------------------------------------------
	
	To remove and reinstall audio compression drivers in Microsoft Windows 95,
	Microsoft Windows 98, or Microsoft Windows Millennium Edition (Me):
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Multimedia, and then click Details.
	
	4. Click to clear the Audio Compression check box, and then click OK.
	
	5. Click Apply.
	
	6. On the Windows Setup tab, click Multimedia, and then click Details.
	
	7. Click to select the Audio Compression check box, and then click OK.
	
	8. Click OK.
	
	9. Follow the instructions on the screen to finish installing the audio
	  compression drivers.
	
	If the issue continues to occur, proceed to the next method.
	
	Uninstall and Reinstall the Default Codecs
	------------------------------------------
	
	To uninstall and reinstall the default codecs, use the following methods in the
	order in which they are presented.
	
	Uninstall All Default Codecs:
	
	To uninstall all of the default codecs:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. On the Windows Setup tab, click Multimedia, and then click Details.
	
	3. Click to clear the Audio Compression and Video Compression check boxes, and
	  then click OK.
	
	4. Click OK.
	
	Delete Specific Codecs and MCI Devices:
	
	To delete a specific codec or MCI device:
	
	1. In Control Panel, double-click Multimedia.
	
	2. Click the Advanced or the Devices tab.
	
	3. Double-click one of the following branches:
	
	   - Audio Compression Codecs
	   - Video Compression Codecs
	   - Media Control Devices
	
	4. Double-click the codec that you want to delete or one of the following MCI
	  devices, and then click Remove:
	
	   - CD Audio Device
	   - MIDI Sequencer Device
	   - Motion Video Device
	   - PIONEER LaserDisc Device
	   - VISCA VCR Device
	   - Wave Audio Device
	
	NOTE: Do not delete the Microsoft PCM Converter codec.
	
	5. Repeat steps 3 and 4 to delete all of the audio and video codecs and all of
	  the MCI devices, except the Microsoft PCM Converter audio codec.
	
	6. Restart your computer.
	
	Reinstall the Default Codecs:
	
	To reinstall the default codecs:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Multimedia, and then click Details.
	
	4. Click to select the Audio Compression and the Video Compression check boxes,
	  and then click OK.
	
	5. Click Apply.
	
	6. Click OK.
	
	7. Follow the instructions on the screen to finish installing the codecs.
	
	Reinstall MCI Devices and Additional Codecs:
	
	To reinstall the MCI devices or additional codecs:
	
	1. In Control Panel, double-click Add New Hardware.
	
	2. Click Next, click No, and then click Next.
	
	3. In the Hardware Types box, click Sound, Video, and Game Controllers.
	
	4. In the Manufacturers box, click Microsoft MCI.
	
	5. In the Models list, click CD Audio Device (Media Control).
	
	6. Click Next.
	
	7. Click Finish.
	
	8. Repeat the steps 1 through 7 to reinstall all of the following MCI devices:
	
	   - MIDI Sequencer Device
	   - Motion Video Device
	   - PIONEER LaserDisc Device
	   - VISCA VCR Device
	   - Wave Audio Device
	
	9. Repeat steps 1 through 7 to reinstall any additional MCI devices or codecs
	  that you want to use.
	
	10. Restart your computer.
	
	Select the correct playback device in the Multimedia Settings Control Panel:
	
	1. Click Start, point to Settings then click Control Panel.
	
	2. Double-click the Multimedia (Windows 95/98) or Sounds and Multimedia (Windows
	  ME/Windows 2000) icon.
	
	3. Select the correct Playback device, if it's not already selected.
	
	If any of the above resolution do not resolve this issue then try the steps
	listed in the following Knowledge Base article:
	
	  Q279763 Error Message: Stop:Failed (0xc29b85a0 - WINERR) Set (EAX Reverb
	  Properties, EAX Environment)
	
	Additional query words: msgame sound audio compress rip tear remove media mech4
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbLinkGolfSearch kbGamesSearch kbGolfSearch kbMSNSearch kbMechCommSearch kbLinks2001 kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
