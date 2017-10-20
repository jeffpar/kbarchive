---
layout: page
title: "Q139075: BUG: MF4024/MF1005 Generated for Serial Communication Settings"
permalink: /kb/139/Q139075/
---

## Q139075: BUG: MF4024/MF1005 Generated for Serial Communication Settings

{% raw %}

	Article: Q139075
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using serial communications to transfer or debug code between a PC and a
	Macintosh, you may see this error:
	
	  warning MF4024: communications settings incomplete fatal error MF1005: comm
	  initialization failed
	
	CAUSE
	=====
	
	MFILE expects both the Macintosh zone and Macintosh name parameter defined even
	when using the serial line to communicate.
	
	RESOLUTION
	==========
	
	Enter the Macintosh AppleTalk zone and the Macintosh name under the Macintosh
	Network (AppleTalk) Settings dialog box. To find it, on the Tools menu, click
	Options, and then click the Debug tab. Click Connection, and then click Settings
	under the Macintosh Platform/Network. Then click (AppleTalk) Connection.
	
	If you do not have an AppleTalk zone or a Macintosh name, enter an imaginary
	name. Be sure to select the Serial Connection before closing the Connection
	dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	MFILE is a Windows NT utility shipped with the Macintosh edition of Visual C++
	2.0. It is used to communicate between a Macintosh and a Windows NT system for
	basic file transfer and control operations. It is invoked by the IDE (Integrated
	Development Environment) when the executable for a Macintosh target is built for
	transferring the executable to the Macintosh. It can be invoked manually through
	the MS-DOS prompt as well. The communication settings are obtained from the
	Registry, which is set through the IDE Connection Dialog box (see the
	"Resolution" section of this article).
	
	If the Macintosh zone and name are not specified through the IDE Connection
	dialog box, you can specify them using the /Z and /N parameters, as in this
	example:
	
	  mfile copy /z MyZone /n MacName ":MyHD:MyFolder:MyMacFile" MyPCFile
	
	REFERENCES
	==========
	
	Appendix E: MFILE Technical Reference of the 68K Programmer's Guide.
	
	Additional query words: mac
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac
	Version           : 2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
