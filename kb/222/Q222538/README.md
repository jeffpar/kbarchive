---
layout: page
title: "Q222538: XFOR:API Gateway Logs Unknown Keyword Errors on Free Busy Search"
permalink: /kb/222/Q222538/
---

## Q222538: XFOR:API Gateway Logs Unknown Keyword Errors on Free Busy Search

	Article: Q222538
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Outlook client will fail to obtain free-busy data for the GroupWise custom
	recipients by means of the Calendar Connector.
	
	The Novell GroupWise API Gateway may log the following to its logfile:
	
	03-15-99 14:38:51 Unknown keyword: WPPO
	03-15-99 14:38:51 Unknown keyword: WPU
	03-15-99 14:38:51 Unknown keyword: CDBA
	03-15-99 14:38:51 Unknown keyword: 
	03-15-99 14:38:51 Unknown keyword: WPPO
	03-15-99 14:38:51 Unknown keyword: WPU
	03-15-99 14:38:51 Unknown keyword: CDBA
	03-15-99 14:38:51 Unknown keyword: 
	...
	03-15-99 14:38:51 Unknown destination in address string: WPD= GWDOMAIN
	...
	03-15-99 14:38:51 Error building the GroupWise message
	
	The API Gateway will place the .API file in the API\GWPROB directory. The file
	will look similar to the following:
	
	WPC-API= 1.2;
	MSG-TYPE= Search;
	Msg-ID= AALHJNKA:1999.3.15.14.38:1999.3.22.14.38:1999.3.15.19.38.45;
	From= 
	   WPD= GWDOMAIN; 
	   WPPO= API; 
	   WPU= BRIANCL001-SA; 
	   CDBA= GWDOMAIN.API.BRIANCL001-SA; ; 
	To= 
	   WPD= GWDOMAIN; 
	   WPPO= GWPO; 
	   WPU= GWUser2; 
	   CDBA= GWDOMAIN.GWPO.GWUser2; ; 
	Begin-Time= 15/3/1999 14:38 +0;
	End-Time= 22/3/1999 14:38 +0;
	-END-
	
	Line 006 Unknown keyword: WPPO
	Line 007 Unknown keyword: WPU
	Line 008 Unknown keyword: CDBA
	Line 008 Unknown keyword: 
	Line 011 Unknown keyword: WPPO
	Line 012 Unknown keyword: WPU
	Line 013 Unknown keyword: CDBA
	Line 013 Unknown keyword:
	
	CAUSE
	=====
	
	The API Gateway has been incorrectly configured with respect to the format of
	the .API file. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q222550 XFOR:Mail doesn't flow from GroupWise to Exchange
	
	RESOLUTION
	==========
	
	For GroupWise 5.x
	-----------------
	
	1. Start NetWare Administrator.
	
	2. Double-click on the API Gateway object.
	
	3. Click Required Parameters.
	
	4. Change the Addressing Format from GroupWise to Component.
	
	5. Click OK.
	
	6. Stop the API Gateway.
	
	7. Restart the ADA (in GroupWise 5.5, the message transfer agent [MTA]).
	
	8. Start the API Gateway.
	
	For GroupWise 4.x
	-----------------
	
	1. Start the Ad.exe program within a command prompt.
	
	2. Tab over to the System window.
	
	3. Highlight the API Gateway object.
	
	4. From the menu, select Actions, then Edit.
	
	5. Tab over to the Specific option, or press the S key.
	
	6. Change the Addressing Format from GroupWise to Component
	
	7. Stop the API Gateway.
	
	8. Restart the Message Server.
	
	9. Start the API Gateway.
	
	MORE INFORMATION
	================
	
	Directory synchronization still works between Exchange Server and GroupWise
	despite the misconfiguration. However, free-busy and mail-related messages may
	fail to be delivered to their final destination.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
