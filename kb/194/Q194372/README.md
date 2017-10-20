---
layout: page
title: "Q194372: Virtual Globe 99: Internet Explorer 4.01 Set as Default Browser"
permalink: /kb/194/Q194372/
---

## Q194372: Virtual Globe 99: Internet Explorer 4.01 Set as Default Browser

{% raw %}

	Article: Q194372
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbimukbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Virtual Globe 99, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	To run properly, Microsoft Encarta Virtual Globe 99 requires Microsoft Internet
	Explorer 4.01 with Service Pack 1 (SP1) or later to be installed on your
	computer. If Internet Explorer 4.01 SP1 is not already installed, Encarta
	Virtual Globe 99 Setup installs it automatically and configures it to be the
	default Web browser.
	
	RESOLUTION
	==========
	
	To configure a different Web browser to be the default Web browser, use the
	appropriate method for the browser you want to use.
	
	Earlier Versions of Internet Explorer
	-------------------------------------
	
	Multiple versions of Internet Explorer cannot coexist on the same computer.
	
	If you have an earlier version of Internet Explorer installed on your computer,
	Encarta Virtual Globe Setup upgrades it automatically to Internet Explorer 4.01
	SP1.
	
	Netscape Navigator (3.x and 4.x)
	--------------------------------
	
	To configure Netscape Navigator to be the default Web browser, follow these
	steps:
	
	1. Start Netscape Navigator.
	
	2. When you receive the following message, click Yes:
	
	  Navigator is no longer registered to handle Internet Shortcuts.
	
	  Would you like to register Navigator as your default browser?
	
	  NOTE: If you click to select the Do not perform this check in the future check
	  box and then click No, the prompt to set Netscape Navigator as the default
	  browser does not appear, and you cannot make Netscape Navigator the default
	  browser.
	
	MORE INFORMATION
	================
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	To restore the "register Navigator as your default browser" prompt, use the
	appropriate method for your version of Netscape Navigator.
	
	Netscape Navigator 3.x
	----------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To restore the "register Navigator as your default browser" prompt in Netscape
	Navigator 3.x, use Registry Editor to locate the IgnoreDefCheckn value setting
	in the following registry key:
	
	HKEY_CURRENT_USER/Software/Netscape/Netscape Navigator/Main
	
	Change the value for the IgnoreDefCheckn value setting to "no" (without the
	quotation marks).
	
	Netscape Navigator 4.x (Communicator)
	-------------------------------------
	
	To restore the "register Navigator as your default browser" prompt in Netscape
	Navigator 4.x (Communicator), follow these steps:
	
	1. Locate the following file in the Netscape folder:
	
	  Prefs.js
	
	2. Use a text editor such as Notepad to open the Prefs.js file.
	
	3. Locate the following entry:
	
	  user_pref("browser.wfe.ignore_def_check", True);
	
	4. Replace the word "True" with the word "False."
	
	5. Save the file, and then quit the text editor.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: multi multi-media media mm world atlas evg
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbimu kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbEncartaReference99 kbEncartaVirtGlobe99
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
