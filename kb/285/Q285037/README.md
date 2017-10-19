---
layout: page
title: "Q285037: Games Err Msg: Your Program Is Making an Invalid Dynamic..."
permalink: /kb/285/Q285037/
---

## Q285037: Games Err Msg: Your Program Is Making an Invalid Dynamic...

	Article: Q285037
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the games listed at the beginning of this article, you may
	receive the following error message:
	
	  Your program is making an invalid dynamic link call to a .dll file.
	
	Also, if you attempt to preview an .avi file, you may receive the same error
	message.
	To preview an .avi file, right-click the file, click Properties, and then click
	the Preview tab.
	
	CAUSE
	=====
	
	This behavior can occur if an audio or video codec, or an MCI device is damaged
	or missing.
	
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
	
	Additional query words: msgame aoeii aok aoe2 fsim flightsim fs2000
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbFlightSimSearch kbAOESearch kbAOE2Kings
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
