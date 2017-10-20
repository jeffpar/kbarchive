---
layout: page
title: "Q230340: &quot;PATH Too Long&quot; Error Installing Windows 95/98 Client on WinNT"
permalink: /kb/230/Q230340/
---

## Q230340: &quot;PATH Too Long&quot; Error Installing Windows 95/98 Client on WinNT

{% raw %}

	Article: Q230340
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error dialog box may be displayed when you install the SNA Server
	client for Windows 95/98 on a Windows NT system:
	
	  Setup Message
	
	  The PATH statement in your Autoexec.bat file is too long for Setup to modify.
	
	  Before your new software will run correctly, you must edit the Autoexec.bat
	  file manually to add the following folder to your PATH statement:
	
	  C:\SNA95\SYSTEM
	
	NOTE: The actual statement to add to the PATH statement will depend on the PATH
	that was specified in the Windows 95/98 client Setup program.
	
	Clicking the OK button on the error dialog box allows the Windows 95/98 client
	Setup to continue. Setup will complete normally despite the fact that the PATH
	could not be modified.
	
	If the Windows 95/98 client is being installed using an unattended installation
	method, this error dialog box causes Setup to stop until the error dialog box is
	acknowledged.
	
	CAUSE
	=====
	
	The "PATH Too Long" error occurs when the PATH statement on the Windows NT
	system exceeds 200 characters or will exceed 200 characters when the path for
	the Windows 95/98 client is added to the existing PATH statement.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	The "Path Too Long" error can be prevented by modifying the PATH in Windows NT
	to be less than 200 characters. For additional information about methods that
	can be used to allow longer PATH statements, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q169171 Long PATH Environment Variable Causes 16-bit Apps to Hang
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, and 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The following steps have to be done to apply the update to prevent the "PATH Too
	Long" error from occurring when the Windows NT path is greater than 200
	characters in length:
	
	1. Copy the SNA Server client for Windows 95/98 to a local hard drive.
	
	2. Backup and rename the existing Snafile.stf file located in the Windows 95/98
	  client directory (for example, c:\Win9x) created in the previous step.
	
	3. Copy the updated Snafile.stf into the local client directory.
	
	4. Run Setup.exe from the local directory.
	
	The updated Snafile.stf does not attempt to add the path for the Windows 95/98
	client to the Windows NT PATH statement. If the path for the Windows 95/98
	client is needed, it will have to be added manually.
	
	NOTE: This update is most useful in those environments where the SNA Server
	client for Windows 95/98 will be installed in an unattended manner, as user
	intervention to continue Setup is not wanted.
	
	The Windows NT PATH statement consists of the following:
	
	- The PATH variable found on the Environment tab of the System tool in Control
	  Panel.
	
	- The PATH statement in the Autoexec.bat file, if one exists.
	
	- The PATH statement in the Autoexec.nt file, if one exists.
	
	The PATH statements (if they exist) from the Autoexec.bat and Autoexec.nt files
	are appended to the PATH environment variable specified in Control Panel.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
