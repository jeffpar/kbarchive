---
layout: page
title: "Q241219: MS99-036: Unattended Installation File Not Deleted After Setup"
permalink: /kb/241/Q241219/
---

## Q241219: MS99-036: Unattended Installation File Not Deleted After Setup

{% raw %}

	Article: Q241219
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.5
	Operating System(s): 
	Keyword(s): kbsetup kbSecurity KbSECBulletin
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Server 4.0 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an unattended Windows NT 4.0 installation process finishes, a copy of the
	Unattend.txt file that contains installation parameters may remain on the hard
	disk. Depending on the method used to perform the installation, the file may
	contain sensitive information, potentially including the local Administrator
	user name and password.
	
	RESOLUTION
	==========
	
	To resolve this issue, ensure that the Unattend.txt file is reviewed and any
	sensitive information (including account information and passwords) is erased
	from the file, or delete the file altogether, after you perform an unattended
	installation of Windows NT 4.0.
	
	To delete the file the first time a user logs on to the computer, use the Runonce
	feature in Windows NT 4.0 to run a batch file containing a command to delete the
	.inf file (depending on your type of Setup) containing the Setup information.
	For additional information about using the Runonce feature, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q158447 How to Run a Program Only Once After Unattended Setup of Windows NT
	
	MORE INFORMATION
	================
	
	When you perform an unattended installation of Windows NT 4.0, the installation
	parameters are included in the Unattend.txt file. Depending on the specific
	installation, the parameter file may contain sensitive information such as
	account identifiers and passwords. A vulnerability exists because the
	installation process copies the parameter file to a file in the
	%SystemRoot%\System32 folder (the $winnt$.inf file for a typical unattended
	installation, or the $nt4pre$.inf file if you use the System Preparation
	[Sysprep] tool), but does not delete the file when the installation is finished.
	By default, this file can be read by any user who is logged on locally.
	
	
	For additional information about unattended installation, please click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	  Q158484 INFO: How to Set the Administrator Password During Unattended Setup
	
	More information about the Sysprep tool is available at the following Microsoft
	Web site:
	
	  http://www.microsoft.com/ntworkstation/technicalresources/deployment/DeploymentDocs/deploy/DeployTools/SysPrep.asp
	
	Microsoft Windows 2000
	----------------------
	
	This does not affect installations of Windows 2000. During an unattended
	installation of Windows 2000, the Setup process deletes all sensitive
	information from the parameter file (upon successful completion). This occurs
	regardless of whether a normal unattended installation is performed or if
	Sysprep is used.
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbsetup kbSecurity KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbSBServ450
	Version           : :4.0,4.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
