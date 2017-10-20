---
layout: page
title: "Q114370: WFWG Err Msg: Error 58 on Protocol 0"
permalink: /kb/114/Q114370/
---

## Q114370: WFWG Err Msg: Error 58 on Protocol 0

{% raw %}

	Article: Q114370
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows for Workgroups version 3.11 with Novell
	connectivity installed through IPXODI, the following error may occur:
	
	  The following error occurred while loading protocol number 0.
	
	  Error 58: The network has responded incorrectly. You may need to reconfigure
	  the protocol using Network Setup. If your computer is a portable, make sure
	  it is connected to its docking station."
	
	NOTE: Choosing OK in this dialog box allows Windows to load; however, the
	Microsoft Windows Network is disabled.
	
	CAUSE
	=====
	
	When you install Novell IPXODI support in Windows for Workgroups 3.11, Setup
	must make certain assumptions about the IPXODI configuration since Windows for
	Workgroups 3.11 does not ship with any of the Novell ODI files. One of the
	assumptions concerns the specific name of the multiple link interface driver
	(the Novell ODI network interface card driver). This name is referenced in the
	PROTOCOL.INI file on the Bindings= line(s). If the driver name specified on the
	Bindings= line does not match the name of the multiple link interface driver
	(MLID) being used, the above error may be generated.
	
	RESOLUTION
	==========
	
	To correct this error, make a note of the actual name of the MLID file listed
	after LSL.COM in the AUTOEXEC.BAT or STARTNET.BAT file. Edit the PROTOCOL.INI
	file and verify that the Bindings= line matches the MLID file described above.
	If the Bindings= entry does not match the MLID name, correct the line so that it
	does.
	
	NOTE: On some configurations there may be two Bindings= lines.
	
	Example
	-------
	
	The following example uses a 3Com Etherlink III (3C5x9) NIC, which is one of the
	more common cards with which the above error message occurs. Below are excerpts
	of the files created by Network Setup.
	
	AUTOEXEC.BAT:
	
	     C:\WINDOWS\NET START
	     C:\<PATH>\LSL.COM
	     C:\<PATH>\<3C5X9.COM>    (This is the MLID.)
	     C:\<PATH>\IPXODI.COM
	     C:\WINDOWS\ODIHLP.EXE
	     C:\<PATH>\NETX.EXE
	
	PROTOCOL.INI:
	
	     [NWLINK]
	     Bindings=3C509
	
	     [NETBEUI]
	     Bindings=3C509
	
	Note that the MLID filename in the AUTOEXEC.BAT file is 3C5x9.COM, but the
	PROTOCOL.INI file references 3C509; including the file extension will result in
	the problem not being resolved. The corrected PROTOCOL.INI should read as
	follows:
	
	     [NWLINK]
	     Bindings=3C5x9
	
	     [NETBEUI]
	     Bindings=3C5x9
	
	For more information about this error in non-ODI configurations, query on the
	following words in the Microsoft Knowledge Base:
	
	  netbeui and wfwg and ndis and tshoot
	
	
	Additional query words: adapter 3.11 netware
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
