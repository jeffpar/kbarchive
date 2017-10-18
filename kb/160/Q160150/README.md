---
layout: page
title: "Q160150: Error in RAS Admin: &quot;No Remote Access Servers Were Found...&quot;"
permalink: kb/160/Q160150/
---

## Q160150: Error in RAS Admin: &quot;No Remote Access Servers Were Found...&quot;

	Article: Q160150
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using Remote Access Server (RAS) Administrator to remotely administer a
	domain, you get the following error in RAS Administrator:
	
	  No Remote Access Servers were found in the selected domain.
	
	Or the following error may appear in your Windows NT graphical user interface
	(GUI):
	
	  Error 1909: The referenced account is currently locked out and may not be
	  logged on to.
	
	CAUSE
	=====
	
	You have a one-way trust from your domain (domain A) to two other domains
	(domains B and C). You have an account on domains B and C, but your password is
	different on the two trusted domains.
	
	You have administrator privilege on all domains, and you use RAS to remotely
	administer one of the domains, say domain B. Then you shift the RAS
	Administrator focus to domain C. Now one of the errors listed above occurs. You
	should be offered the opportunity to supply the correct password, but instead
	you get one of the previously mentioned error messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Which error message you get depends on whether you have the "Account lockout"
	option selected in the Account Policy menu item for User Manager for Domains:
	
	Case 1: If "Account lockout" is configured, you will get the "No Remote Access
	Servers were found..." error.
	
	Case 2: If "Account lockout" is configured, you will get the Error 1909 in the
	Windows NT user interface.
	
	Notice that under these same conditions Event Viewer and Server Manager produce
	the error "Access Denied" if Account lockout is not selected. With the Account
	lockout option selected, all tools produce the Error 1909 in the GUI.
	
	Additional query words: validate validation authenticate pass word
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	
	=============================================================================
	
