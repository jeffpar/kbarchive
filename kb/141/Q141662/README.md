---
layout: page
title: "Q141662: FAX: Err Msg: Failure to Submit Fax"
permalink: /kb/141/Q141662/
---

## Q141662: FAX: Err Msg: Failure to Submit Fax

{% raw %}

	Article: Q141662
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have insufficient rights on a Novell network environment or if the CAS
	driver rejected a fax with an attachment, you may get the following error
	message:
	
	  Failure to submit fax
	
	CAUSE
	=====
	
	The above error may be caused by the following situations:
	
	- In a Novell network environment, a new installation of the Microsoft Gateway
	  to Fax may not work successfully. This problem may be caused by insufficient
	  access rights.
	
	- If the Fax Gateway has been working, you can still get the above error
	  message on the gateway screen and in the FAXGATE.LOG file. This may be
	  related to specific faxed item(s) (with attachments rejected by the CAS
	  driver during submission).
	
	RESOLUTION
	==========
	
	
	In a Novell network environment:
	
	1. Add the user FAXGTW to a user group granted the proper access rights.
	
	  This group should have the RWCEM and F rights.
	
	2. Give the FAXGTW individual account the RWCEM and F rights.
	
	  If you are not on a Novell network environment, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q130447 FAX: Err Msg: "Failure to Submit Fax!" on Every Faxout Cycle
	
	MORE INFORMATION
	================
	
	If you get the above error message with a new installation, and the access
	rights mentioned above are correct, then de-install and reinstall all the Fax
	Gateway components. Make sure you delete and remove any previous occurrence of
	the Intel SatisFAXtion files and any path referring to them. There should be
	only one occurrence of those files.
	
	Once you have installed the Intel SatisFAXtion software, you cannot move or copy
	files to another location. The installation location is coded into the .EXE file
	and can only be changed by reinstalling.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300a
	Version           : MS-DOS:3.0a
	
	=============================================================================
	

{% endraw %}
