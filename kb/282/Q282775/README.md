---
layout: page
title: "Q282775: &quot;Error Writing Encrypted Data&quot; Error During IIS 5.0 Installation"
permalink: /kb/282/Q282775/
---

## Q282775: &quot;Error Writing Encrypted Data&quot; Error During IIS 5.0 Installation

{% raw %}

	Article: Q282775
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis500 kbiis500prod2web kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation or re-installation of Internet Information Services
	(IIS) 5.0, you may receive the following error message:
	
	  "Error Writing Encrypted Data to the Web Services Configuration Database."
	
	The installation halts, and you are prompted to Retry, Write unencrypted, or
	Write unencrypted all.
	
	CAUSE
	=====
	
	This error occurs because of incorrect (corrupt) information. If this is a new
	installation of IIS 5.0, the corrupt information is located in the following
	folder:
	
	  %Windir%\Documents and Settings\
	
	If you are re-installing IIS, the corrupt information is located in the following
	folder:
	
	  %Windir%\Profiles\All Users\Application Data\Microsoft\Crypto\RSA\MachineKeys
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. If you are still prompted to retry, delete all keys except the key that
	  corresponds to the start of the latest installation from the MachineKeys
	  folder. This key has a date/time stamp that corresponds to the time that you
	  started your last installation.
	
	  -or-
	
	  If the installation is cancelled or did not complete successfully, use Windows
	  Explorer to remove encryption from the %Windir%\Profiles\All
	  Users\Application Data\Microsoft\Crypto\RSA\MachineKeys folder. To this,
	  follow these steps:
	
	  a. Right-click the folder, and then click Properties.
	
	  b. On the General tab, click Advanced.
	
	  c. Clear the "Encrypt contents to secure data" check box, and then click OK.
	     If this check box is NOT already selected, rename the MachineKeys folder
	     to "OldMachineKeys".
	
	2. Log off, and then log back on as Local Administrator. The installation or
	  reinstallation of IIS 5.0 should complete successfully.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q271865 PRB: Error Message '0x8009000F = Object Already Exists'
	
	Additional query words: IIS 5 Metabase.bin metabase bin
	
	======================================================================
	Keywords          : kbDSupport kbiis500 kbiis500prod2web kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
