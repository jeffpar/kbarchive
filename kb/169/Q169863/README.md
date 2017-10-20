---
layout: page
title: "Q169863: PRB: Error Logging into the Anomaly Tracking System"
permalink: /kb/169/Q169863/
---

## Q169863: PRB: Error Logging into the Anomaly Tracking System

{% raw %}

	Article: Q169863
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user tries to log into the Anomaly Tracking System they receive the
	following error message:
	
	  Could not log in user with current Id and password.
	  Please reenter user information.
	
	CAUSE
	=====
	
	Each user must be set up by the Anomaly Tracking Administrator before they can
	log into the system.
	
	RESOLUTION
	==========
	
	Log into the "Anomaly Tracking System" using the Admin ID and the Admin
	password. If these values have not been changed, the Admin ID is "Admin" and the
	Admin password is "Admin" (both values are without the double quote marks).
	After you have logged in as the "Admin," go to Tools menu option and select
	"User Maintenance." Add the user's name, login ID, and password and then attempt
	to log in as the new user.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Attempt to log into the Anomaly tracking system by clicking on your short- cut
	icon or by clicking on the Ats.exe file in the "\Program Files\DevStudio\Anomaly
	Tracking System" folder. Attempt to log in as a user who has not been setup by
	the Admin.
	
	The following error message appears:
	
	  Could not log in user with current Id and password.
	  Please reenter user information."
	
	NOTE: If the above error message does not appear, it could be that the user
	information already exists.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : WINDOWS:5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
