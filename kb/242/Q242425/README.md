---
layout: page
title: "Q242425: Using Session Objects with Session State Disabled Returns Error"
permalink: /kb/242/Q242425/
---

## Q242425: Using Session Objects with Session State Disabled Returns Error

	Article: Q242425
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis400 kbiis500
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to use a session-level object or variable when session state is
	disabled, you may receive the following error message:
	
	  Microsoft VBScript runtime error '800a000d'
	  Type mismatch: 'Session'
	  /scripts/sessiontest/test.asp, line XXX
	
	CAUSE
	=====
	
	This behavior is by design. The session object is not registered in the
	scripting name space, so any executing scripts do not understand it and return a
	"Type mismatch" error message.
	
	MORE INFORMATION
	================
	
	The following steps will reproduce this behavior.
	
	1. Disable session state at the folder or site level:
	
	  a. Select a Web site or folder in the Microsoft Management Console (MMC).
	
	  b. Right-click the item and select Properties.
	
	  c. Select the Directory or Home Directory tab.
	
	  d. Click Configuration or Create, and then click Configuration.
	
	  e. Select the App Options tab
	
	  f. Clear the Enable Session State box.
	
	  g. Click OK to return all the way back to the MMC.
	
	  h. Create a page in the application's physical folder named "Sesstest.asp"
	     (without the quotation marks) with the following contents:
	
	  <% Session("strTest") = "Some Text" %>
	
	  i. Browse the page. You should see the error.
	
	2. Disable session state at the page level:
	
	  a. Highlight a Web site or folder in the MMC.
	
	  b. Right-click the item and select Properties.
	
	  c. Select the Directory or Home Directory tab.
	
	  d. Click Configuration or Create and then click Configuration.
	
	  e. Select the App Options tab.
	
	  f. Select the Enable Session State check box.
	
	  g. Click OK to return all the way back to the MMC.
	
	  h. Create a page in the application's physical folder named "Sesstest.asp"
	     (without the quotation marks) with the following contents:
	
	  <% @EnableSessionState = False %>
	  <% Session("strTest") = "Some Text" %>
	
	  i. Browse to the page. You should see the error.
	
	Additional query words: iis asp
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
