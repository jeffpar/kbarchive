---
layout: page
title: "Q122387: ATI Video Fails with Adaptec 2940 SCSI Adapter on PCI Bus"
permalink: /kb/122/Q122387/
---

## Q122387: ATI Video Fails with Adaptec 2940 SCSI Adapter on PCI Bus

{% raw %}

	Article: Q122387
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50 3.51
	
	WINDOWS
	
	kb3rdparty kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT computer has an ATI video adapter and an Adaptec 2940 SCSI
	controller on a PCI bus, you may experience the following behavior depending on
	which ATI video driver is installed:
	
	  Video Driver     Behavior
	  ---------------------------------------------------------------------
	  ATI Mach 64 GX   When you select the Display icon in Control Panel, the
	                   following error message appears:
	
	  WARNING: The Application got invalid data from the display driver. You used
	  the down level graphic adapter driver. Contact the manufacturer for the
	  current one.
	
	  ATI Graphics     The system intermittently stops responding (hangs) or
	  Pro Turbo        displays garbled output at the logon screen.
	
	  ATI Mach64 PCI   The system hangs when you attempt to copy several large
	                   files (totaling several megabytes).
	
	
	RESOLUTION
	==========
	
	To correct these problems, do one of the following:
	
	- Switch PCI expansion slot locations for the ATI video adapter and the Adaptec
	  2940 SCSI controller.
	
	- Contact Adaptec technical support at (800) 959-7274 for the latest ROM BIOS
	  for the Adaptec 2940 SCSI controller (dated April 1994 or later).
	
	- Contact ATI Technical Support at (905) 882-2626 to verify that you have the
	  latest ATI chip set number on the video card. ATI has reported that there are
	  problems with video cards within a certain range of chip set numbers.
	
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt aha 3rdparty
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
