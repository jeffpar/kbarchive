---
layout: page
title: "Q87270: How to Disable EZSound FX from Windows"
permalink: /kb/087/Q87270/
---

## Q87270: How to Disable EZSound FX from Windows

{% raw %}

	Article: Q87270
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to disable Future Trends Software's EZSound FX
	version 2.0 in Windows 3.1 for testing purposes.
	
	MORE INFORMATION
	================
	
	EZSound FX is an application that adds additional sound functionality to Windows
	3.0, 3.0a, and 3.1. This package includes ability to play and convert WAV, SND,
	VOC, ROL, NXT, SVX, MAC and several other sound formats, a sound file editor, a
	CD player, and the ability to assign sounds to system events like resizing a
	window. EZSound FX supplements the original sound functionality that ships with
	Windows Multimedia Extensions 1.0 and Windows 3.1 when EZSound FX is installed
	with them.
	
	Steps to Disable EZSound FX
	---------------------------
	
	1. Edit the SYSTEM.INI file with a standard ASCII text editor.
	
	2. Locate the [boot] section and make the following changes:
	
	  Before:
	
	        [boot]
	        ;EZSound FX Driver
	        sound.drv=sfsound.drv
	        ;sound.drv=mmsound.drv
	
	  After:
	
	        [boot]
	        ;EZSound FX Driver
	        ;sound.drv=sfsound.drv
	        sound.drv=mmsound.drv
	
	3. Locate the [386enh] section and make the following changes:
	
	  Before:
	
	        [386enh]
	        ;The line device=vclmad.386 is used by EZSound FX
	        device=vclmad.386
	
	  After:
	
	        [386enh]
	        ;The line device=vclmad.386 is used by EZSound FX
	        ;device=vclmad.386
	
	4. Steps 2 and 3 disable EZSound FX. If you want to remove the rest of EZSound
	  FX's settings, remove (or comment out) the following sections in the
	  SYSTEM.INI file:
	
	  [sonic foundry]
	  [sfsound.drv]
	  [Sampler.dll]
	  [MMServices]
	
	5. If necessary, remove any EZSound FX files on the WIN.INI file's load= and
	  run= lines, and any EZSound FX icons in the StartUp group.
	
	The EZSound FX product included here is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 MMWEXT MWIN EZ 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
