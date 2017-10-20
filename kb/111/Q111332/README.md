---
layout: page
title: "Q111332: WFWG Error Msg: This Postoffice Cannot Be Updated"
permalink: /kb/111/Q111332/
---

## Q111332: WFWG Error Msg: This Postoffice Cannot Be Updated

{% raw %}

	Article: Q111332
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Extensions for Windows for Workgroups or the
	Microsoft Mail Update program, you may receive the following error message:
	
	  This post office cannot be updated. Consult Microsoft Product Support
	  Services for more information.
	
	CAUSE
	=====
	
	There are two possible causes for this error:
	
	- You are running the Extend utility on a server post office. Extend can be run
	  only on a workgroup post office (WGPO).
	
	  If the post office is not a workgroup post office, you do not need to run the
	  Extend utility. The Extend utility is designed for Windows for Workgroups
	  workgroup post offices to extend them to the functionality of a full
	  Microsoft Mail post office.
	
	- You are trying to run the Microsoft Mail Update program on a workgroup post
	  office without first running the Extend utility.
	
	  If you run the Update program without first running the Extend utility, or if
	  you do not have a valid Microsoft Mail post office, you receive the above
	  error. If you do not have Windows for Workgroups and have not yet created a
	  Microsoft Mail post office, you must run the Install program instead of the
	  Update program. If you have any existing Microsoft Mail post offices, you
	  should run the Update utility to add the features of the new version of
	  Microsoft Mail while retaining the definitions of the older post office.
	
	Additional query words: 3.10 3.11 3.0 3.00B Moose MSMail 3.2 err msg postoffice
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
