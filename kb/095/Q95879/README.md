---
layout: page
title: "Q95879: VINES Err Msg: BAN: Unable to Read 'PCCONFIG.DB' with WFWG"
permalink: /kb/095/Q95879/
---

## Q95879: VINES Err Msg: BAN: Unable to Read 'PCCONFIG.DB' with WFWG

{% raw %}

	Article: Q95879
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Banyan VINES connectivity is installed and Windows for Workgroups has been
	installed on a drive other than drive C, the following error message may appear
	during startup when the BAN.EXE driver executes from the AUTOEXEC.BAT file:
	
	  BAN: Unable to read 'PCCONFIG.DB' configuration database.
	
	In addition, this may cause the ARSWAIT.EXE terminate-and-stay- resident (TSR)
	program to stop the system.
	
	CAUSE
	=====
	
	This problem occurs because the Banyan VINES Setup program inserts the following
	line in the AUTOEXEC.BAT file
	
	     CD X:\WINDOWS
	
	where X is the drive on which Windows for Workgroups is installed. This command
	changes the working directory on drive X but does not actually change to drive
	X. Because the BAN.EXE TSR must be executed from the same directory where the
	PCCONFIG.DB file is located, the drivers fail to load and the above error
	message occurs during startup.
	
	WORKAROUND
	==========
	
	To work around the error message, use any text editor to insert the following
	command line in the AUTOEXEC.BAT file prior to the CD X:\WINDOWS line (where X
	is the drive on which Windows for Workgroups is installed):
	
	     X:
	
	Banyan VINES is manufactured by Banyan Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty boot up lockup lock hang crash
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
