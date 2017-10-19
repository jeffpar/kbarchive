---
layout: page
title: "Q124387: DOCERR: How to Use the MIXERLINECONTROLS dwControlType Flag"
permalink: /kb/124/Q124387/
---

## Q124387: DOCERR: How to Use the MIXERLINECONTROLS dwControlType Flag

	Article: Q124387
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	The Microsoft Windows Sound System version 2.0 Driver Development Kit
	Release Notes incorrectly describe how the dwControlType member of the
	MIXERLINECONTROLS structure should be set before the
	mixerGetLineControls function is called. Instead of the
	MIXER_GETLINECONTROLSF_ONEBYID flag, it should reference the
	MIXER_GETLINECONTROLSF_ONEBYTYPE flag.
	
	The error occurs in 2 places in the Release Notes, page 127 and page 181.
	In each place, the paragraph for the dwControlType member begins with:
	
	  "Specifies the control type of the control desired. The mixerGetlineControls
	  function uses this member with the MIXER_GETLINECONTROLSF_ONEBYID flag to
	  retrieve the first control of the specified type on the line specified by the
	  dwLineID member of the MIXERLINECONTROLS structure..."
	
	The paragraph should begin with:
	
	  "Specifies the control type of the control desired. The mixerGetlineControls
	  function uses this member with the MIXER_GETLINECONTROLSF_ONEBYTYPE flag to
	  retrieve the first control of the specified type on the line specified by the
	  dwLineID member of the MIXERLINECONTROLS structure..."
	
	NOTE: In Windows NT version 3.5, the Mixer Manager API (Application
	Programming Interface) has been incorporated into the Win32 SDK, and the
	Mixer Manager SPI (Service Provider Interface) has been incorporated into
	the Win32 DDK. The documents for these tools give correct descriptions for
	the items discussed in this article.
	
	Additional query words: 2.00 WSS DDK Mixer Manager MIXERLINECONTROLS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : :2.0
	
	=============================================================================
	
