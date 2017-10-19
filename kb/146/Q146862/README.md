---
layout: page
title: "Q146862: Automation Interfaces Can't Select Speech Engine Modes"
permalink: /kb/146/Q146862/
---

## Q146862: Automation Interfaces Can't Select Speech Engine Modes

	Article: Q146862
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 08-NOV-2001
	
	4.00    | 3.50 3.51
	WINDOWS | WINDOWS NT
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Speech Software Development Kit (SDK) version 1.0 
	-------------------------------------------------------------------------------
	
	The properties and methods exposed on the voice command and voice text OLE
	Automation objects do not provide properties or methods that you can use to
	select specific engine modes. When an OLE Automation object's Register
	method is called, it will select the current default for the site chosen.
	
	This isn't a significant limitation because applications should allow the
	Voice-Navigation application installed on a system to select the default
	voices. However, this means Visual Basic and Visual Basic for Applications
	(VBA) cannot be used to write a Voice-Navigation application.
	
	A similar limitation applies to the voice command and voice text OLE COM
	objects, however this can be overcome if the engine mode's GUID is known.
	The low level CLSID_SREnumerator and CLSID_TTSEnumerator objects must be
	used to find or enumerate a list of the modes installed on a given system.
	
	For voice command applications, a selected mode GUID can be passed in the
	gModeID member of the VCSITEINFO structure referenced by the pSiteInfo
	parameter of the IVoiceCmd::Register() function. A selected mode GUID can
	also be passed as the gVoice parameter of the IVCmdAttributes::SRModeSet()
	function. For voice text applications, a selected mode GUID can be passed
	in the gModeID member of the VTSITEINFO structure referenced by the
	pSiteInfo parameter of the IVoiceTxt::Register() function. A selected mode
	GUID can also be passed as the gVoice parameter of the
	IVTxtAttributes::TTSModeSet() function.
	
	Additional query words: SAPI VCMD VTXT
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbAudDeveloper _IKkbbogus kbSDKSearch kbSDKSpeech
	Version           : :1.0
	
	=============================================================================
	
