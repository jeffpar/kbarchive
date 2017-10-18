---
layout: page
title: "Q254228: Remote Control of Clients Does Not Work with Winsock2 with IP"
permalink: kb/254/Q254228/
---

## Q254228: Remote Control of Clients Does Not Work with Winsock2 with IP

	Article: Q254228
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbHelpDesk
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Remote Control tool on a client computer that is
	running Microsoft Windows 95 or Microsoft Windows 98 and runs Winsock2 with IP
	as the default protocol, Remote Control does not work properly. The client
	either experiences a general protection (GP) fault in Idisp16.dll, or the
	desktop is not properly drawn.
	
	CAUSE
	=====
	
	The Systems Management Server (SMS) 1.2 Remote Control tool is not compatible
	with the Winsock2 update. This version of Winsock is included with Windows 98 by
	default, and can exist in Windows 95 if the Winsock2 update has been installed.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	Note that this hotfix installs either an English or a French client, depending on
	the installed version on the target site server.
	
	This fix should have the following file attributes or later.
	
	French files (0000040C):
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  03/28/2000  01:06p  655,120  Sightnt.dll   Alpha
	  02/05/2000  04:02a    3,808  Cl_w95.mod    
	  04/03/2000  10:24p  248,206  Hotfix.map    
	  03/28/2000  01:06p  338,640  Sightnt.dll   Intel
	  03/24/2000  08:27p   37,312  Wumsg9x.dll   Intel
	  03/27/2000  05:42p   15,768  _idisp9x.dll  Intel
	  03/24/2000  08:27p   92,608  _wuser9x.dll  Intel
	
	English files (00000409):
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  03/23/2000  09:27p  649,488  Sightnt.dll   Alpha
	  04/28/1999  11:50p    3,525  Cl_w95.mod
	  04/03/2000  09:38p  248,281  Hotfix.map
	  03/23/2000  09:26p  333,008  Sightnt.dll   Intel
	  03/24/2000  01:24a   36,800  Wumsg9x.dll   Intel
	  03/24/2000  01:09a   15,768  _idisp9x.dll  Intel
	  03/24/2000  01:25a   91,584  _wuser9x.dll  Intel
	
	International files:
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  04/15/1999  04:24a  202,476  Cli_dos.exe   Intel
	  07/13/1999  02:25a   12,288  Coexst9x.dll  Intel
	  03/24/2000  01:09a  293,979  Idisp9x.dll   Intel
	  03/24/2000  01:25a    8,464  Idispthk.dll  Intel
	  03/24/2000  01:09a  127,804  Imp9x.dll     Intel
	  03/24/2000  01:09a  149,636  Loc16vc0.dll  Intel
	  03/24/2000  01:25a   84,112  Multpr9x.dll  Intel
	  03/24/2000  01:25a   38,320  Queue9x.dll   Intel
	  06/26/1998  11:29p      317  Shutdown.ct1  
	  03/24/2000  01:10a    8,024  Vuser9x.vxd   Intel
	  03/24/2000  01:09a   63,344  Woudat9x.dll  Intel
	  04/12/2000  01:46a  266,208  Wuser9x.exe   Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either NetBIOS or IPX as the default protocol
	for the SMS Remote Control tool.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method on the SMS site server.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q254228.exe is
	  an SMS Installer file that updates specific files on your site server.
	
	2. Log on to your site server using an account with administrator privileges.
	
	3. Run Q254228.exe and follow the instructions in the wizard. You can run the
	  file in Quiet mode by using the /s switch.
	
	Note that the status bar in the Hotfix Installer tool may show a percentage that
	varies quickly between 30 percent and 40 percent for a few seconds when the
	Shutdown.ct1 file is being processed. This is not a problem; the Hotfix
	Installer tool waits for the shutdown of the site.
	
	Manual Installation
	-------------------
	
	1. Run Q254228.exe.
	
	2. In the first Welcome screen, click Next.
	
	3. Save or print the installation instructions.
	
	4. Cancel the installation, and then follow the manual installation
	  instructions.
	
	To update the SMS Administrator consoles, copy the Sightnt.dll file from the
	appropriate platform and language folder to the SMS site server or Administrator
	Tools computer. Replace the existing copy of the Sightnt.dll file in the
	<Sms_root_folder>\Site.srv\<Platform>.bin folder.
	
	To update the clients, you can run the Upgrade.bat file on each client. For
	additional information about other methods for updating clients, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbHelpDesk 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
