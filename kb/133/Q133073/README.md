---
layout: page
title: "Q133073: Err Msg: Sound Recorder Cannot Record or Play Back..."
permalink: /kb/133/Q133073/
---

## Q133073: Err Msg: Sound Recorder Cannot Record or Play Back...

{% raw %}

	Article: Q133073
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to play a sound (.wav) file, you may receive the following error
	message:
	
	  Sound Recorder cannot record or play back because a sound device is not
	  installed. To install a sound device, click 'Add New Hardware' in Control
	  Panel.
	
	CAUSE
	=====
	
	This problem can occur if the "drivers=MMSYSTEM.DLL" entry is missing from the
	[boot] section of the System.ini file.
	
	RESOLUTION
	==========
	
	Add the following line to the [boot] section of the System.ini file:
	
	  drivers=MMSYSTEM.DLL
	
	If the line is present but has a semicolon (;) at the beginning, remove the
	semicolon.
	
	MORE INFORMATION
	================
	
	Following the instructions in the error message does not eliminate the problem,
	nor does removing and reinstalling the device in Device Manager. Removing and
	reinstalling all multimedia components also does not eliminate the error
	message.
	
	This problem can also cause other symptoms. When you try to adjust the volume
	using Mixer Control you may receive the following error message:
	
	  There are no active mixer devices available. You may install or activate
	  mixer devices from Control Panel. This application will now exit.
	
	Media Player will run with this problem present, but the only device listed in
	the Devices menu will be Video For Windows.
	
	Additional query words: wmptop
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}
