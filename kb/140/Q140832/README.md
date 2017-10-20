---
layout: page
title: "Q140832: SNA Server Windows 3.x Client Fails to Install on Windows 95"
permalink: /kb/140/Q140832/
---

## Q140832: SNA Server Windows 3.x Client Fails to Install on Windows 95

{% raw %}

	Article: Q140832
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows 3.x SNA Client Setup will fail on Windows 95 with the following
	error if an Autoexec.bat file is not present:
	
	  Setup is unable to detect any network on this computer. Please install a
	  network and try Setup again later.
	
	The same error occurs when running Setup on a client that was previously
	installed if the Autoexec.bat has been removed from the system.
	
	For information on other causes of this error message, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  Q128118 SNA Server Win3.x Client Setup Err Msg: No Windows network...
	
	CAUSE
	=====
	
	Setup was treating the non-existence of AUTOEXEC.BAT as an error, and returning
	early from the SNAValidate function before attempting to figure out which
	network protocols are installed.
	
	While investigating this problem, another problem was discovered. If there's no
	AUTOEXEC.BAT found when Setup starts, Setup tries to create one while modifying
	the system files, and writes just one line to the new AUTOEXEC.BAT: "PATH
	C:\SNA.WIN;".
	
	The next time Setup is run, it finds AUTOEXEC.BAT, but on its way out Setup
	changes the line to "PATHC:\SNA.WIN;". The next time Setup runs, it doesn't
	recognize the path line, so it adds another one like the first time. This
	process is repeated each time Setup is executed.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file, WIN16CL.DLL, to correct this problem. The
	Windows 3.x SNA Client Setup program now continues on with the SNAValidate
	function if the AUTOEXEC.BAT does not exist. In addition, the Setup program
	correctly writes the PATH statement.
	
	WORKAROUND
	==========
	
	To work around this problem, add an AUTOEXEC.BAT to the system where the client
	is being installed. The AUTOEXEC.BAT does not need to contain any specific
	commands; it just needs to exist on the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
