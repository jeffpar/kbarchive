---
layout: page
title: "Q94842: FAX: &quot;Notice 153: Error Reading CDR File&quot; Error in AUDIT"
permalink: /kb/094/Q94842/
---

## Q94842: FAX: &quot;Notice 153: Error Reading CDR File&quot; Error in AUDIT

{% raw %}

	Article: Q94842
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An attempt to use of the audit functions in the Microsoft Mail Gateway to Fax
	fails and the following error occurs:
	
	  Notice 153: Error reading CDR file
	
	This error indicates that the log directory of the Microsoft Mail Postoffice does
	not contain a FAXCDR.LOG file. The fax gateway automatically creates this file
	and adds an entry for each outgoing message.
	
	The CDR (Call Detail Record in the LOG\FAXCDR.LOG file) contains accounting
	information for each transmission of a fax item by users on the LAN.
	
	For more information, please refer to the section titled "The Call Detail Record
	File" in the "Microsoft Mail Gateway to Fax Administrator's Guide" for version
	3.0.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
