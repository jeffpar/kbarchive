---
layout: page
title: "Q65542: Mac Hyp: Preventing Continuous Beep Conflict with HyperCard"
permalink: /kb/065/Q65542/
---

## Q65542: Mac Hyp: Preventing Continuous Beep Conflict with HyperCard

{% raw %}

	Article: Q65542
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When HyperCard version 1.2.2, 1.2.5 or 2.0 is running and the Microsoft Mail
	version 2.00 notifier chimes, the chime becomes a continuous beep. To avoid this
	problem, choose Preferences from the Mail menu and deselect the Sound Chime
	option; if you are using the Microsoft Mail Software Development Kit (SDK) for
	HyperCard, you can modify your HyperCard Home Stack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Mail version 2.00. This problem
	was corrected in Mail version 3.00.
	
	MORE INFORMATION
	================
	
	To modify your Home Stack to turn the Sound Chime option off when HyperCard
	starts, and turn it back on when quitting from HyperCard, do the following:
	
	NOTE: You must be signed in to your Mail account prior to launching HyperCard for
	this script to perform properly.
	
	WARNING: If you make a mistake, you may not be able to undo it. Proceed with
	caution or work on a copy of the Home Stack.
	
	1. Install the MSMAIL resources into the Home Stack with the Mail Interface
	  Documentation Stack. Directions for installation are included within the
	  stack.
	
	2. From the Go menu in HyperCard, choose Home.
	
	3. The User Level must be set at Scripting for the next steps. If it is not,
	  type "set user level to 5" (without the quotation marks) into the message box
	  and press RETURN.
	
	4. From the Objects menu, choose Stack Info.
	
	5. Click Script.
	
	6. Modify the "on startup" routine. Add the following line:
	
	  " get msmail(EnableNotify, "false")" (without the quotation marks)
	
	7. Add a "on quit" routine as follows:
	
	        on doMenu x
	          if x = "Quit HyperCard" then get msmail(EnableNotify, "true")
	        end doMenu
	
	8. Click OK
	
	9. Quit HyperCard. Reopening HyperCard will turn off the Sound Chime; it will be
	  reset when you quit HyperCard.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
