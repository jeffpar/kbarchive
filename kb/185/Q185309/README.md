---
layout: page
title: "Q185309: WD97: Fatal Exception Connecting to a Novell Drive in Word"
permalink: /kb/185/Q185309/
---

## Q185309: WD97: Fatal Exception Connecting to a Novell Drive in Word

{% raw %}

	Article: Q185309
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	
	SYMPTOMS
	========
	
	In Microsoft Word when you click Open on the File menu and click a drive in the
	Look-In list that has been mapped to a Novell server under Microsoft Windows 95
	you may receive the following error:
	
	  Fatal Exception 06 Has occurred at: 17E7:<Address>
	
	CAUSE
	=====
	
	You are using the real-mode Ipxodi.com network client under Microsoft Windows 95
	and the Config.sys file has the "files =" line set to less than 60.
	
	WORKAROUND
	==========
	
	To prevent this error from occurring, set the "files =" line equal to at least
	60 in the Config.sys file. To do this, follow these steps:
	
	1. Close all programs.
	
	2. Click Start and then Run.
	
	3. In the Open box, type sysedit and click OK.
	
	4. Click Config.sys.
	
	5. Look for a line that reads FILES=. If it is less than 60, change it to 60.
	
	6. Save the Config.sys file and then close the System Configuration Editor.
	
	7. Restart Windows.
	
	MORE INFORMATION
	================
	
	For additional information network system requirements for the Config.sys file,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q109501 NETWORKS.WRI from Windows for Workgroups 3.11 (Part 2 of 4)
	
	
	Additional query words: word97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
