---
layout: page
title: "Q250985: PRB: Missing Product Key in the &quot;Unattend&quot; Answer File"
permalink: /kb/250/Q250985/
---

## Q250985: PRB: Missing Product Key in the &quot;Unattend&quot; Answer File

	Article: Q250985
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbDSupport kbSBK
	Last Modified: 17-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click the Fully Automated option on the User Interaction page of the
	Windows 2000 Setup Manager Wizard, you are not prompted for the ProductID value,
	which is included under the [UserData] section of the Answer file
	(Unattend.txt). The following error message is displayed during a GUI-mode Setup
	because of the missing ProductID value:
	
	  Unattended Setup is unable to continue because a Setup parameter specified by
	  your system administrator or computer manufacturer is missing or invalid.
	  Setup must therefore ask you provide this information now. Once you have
	  furnished the required information, unattended Setup operation will continue.
	
	CAUSE
	=====
	
	The ProductID value is missing under the [UserData] section of the Answer file
	(Unattend.txt).
	
	RESOLUTION
	==========
	
	If you select the Fully Automated option on the User Interaction page of the
	Windows 2000 Setup Manager Wizard, you must manually add the ProductID value
	under the [UserData] section of the Winnt.sif file by using a text editor. This
	is necessary to fully automate the installation of Windows 2000. For example:
	
	  Unattend.Txt
	
	  [UserData]
	  ProductID=XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
	
	If you want users to type the Product ID manually, change the install mode from:
	
	  UnattendMode=FullUnattended
	
	to:
	
	  UnattendMode=DefaultHide
	
	When the UnattendMode parameter is set to FullUnattended, you must include all
	setup parameters in the Unattend.txt file, and you must provide a value for each
	setup parameter.
	
	When the UnattendMode parameter is set to DefaultHide, the installation program
	uses the setup parameter values that are listed in the Unattend.txt file. If a
	value for a setup parameter is missing from the Unattend.txt file, the
	installation program displays the error message that is described in the
	"Symptoms" section of this article, and then waits for the user to type the
	required information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For more information on Windows 2000 preinstallation and preinstallation tools,
	refer to the following Windows 2000 OPK User's Guide Web site:
	
	  http://oem.microsoft.com/general/techsupp/Win2000_opk.asp
	
	Additional query words: OPK pid RIS RipRep
	
	======================================================================
	Keywords          : kbsetup kbOPK kbDSupport kbSBK 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbprb
	
	=============================================================================
	
