---
layout: page
title: "Q222550: XFOR: Mail Doesn't Flow from GroupWise to Exchange Server"
permalink: kb/222/Q222550/
---

## Q222550: XFOR: Mail Doesn't Flow from GroupWise to Exchange Server

	Article: Q222550
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following symptoms occur when you try to send mail between Novell GroupWise
	and Microsoft Exchange Server:
	
	- Directory synchronization will be successful, but attempts to send mail from
	  GroupWise to Exchange Server are unsuccessful. However, there are no
	  non-delivery reports (NDRs) sent back to the originating user to indicate
	  that there was a problem.
	
	- GroupWise users will be able to reply to mail sent from Exchange Server
	  users.
	
	- GroupWise users that compose a new piece of mail using the Exchange Server
	  user's entry in GroupWise will find that the mail never reaches the intended
	  user. Instead, you might find the following events in the Application log:
	
	  Informational Application event ID 6066:
	
	  Trying to move file
	  '\\netware\sys\gwdomain\wpgate\api\API_OUT\36ED2937.API' to
	  '\\exchsrvr\connect$\exchconn\gwrouter\badfiles\'
	
	  Warning Application event ID 6062:
	
	  Fail on dispatching message
	  '\\netware\sys\gwdomain\wpgate\api\API_OUT\36ED2937.API' from
	  '\\exchsrvr\connect$\exchconn\gwrouter\badfiles\'
	
	- You might find .api files queuing up in the
	  Exchsrvr\Connect\Exchconn\Gwrouter\Badfiles directory.
	
	
	CAUSE
	=====
	
	The API Gateway is incorrectly configured to supply a GroupWise-type address for
	all mail, whereas the Microsoft Exchange Connector for Novell GroupWise only
	supports the component-type address. For GroupWise 5.x systems, this setting is
	set through the Addressing Format button on the Required Parameters tab in the
	API Gateway object. For GroupWise 4.x systems, this setting is set through the
	Addressing Format option within the Specific menu option in the API Gateway
	properties. See the "Resolution" section below for step-by-step instructions.
	
	Example of a GroupWise-formatted address:
	
	  From= GWDOMAIN.GWPO.gwuser2;
	
	Example of component-formatted address:
	
	  From=
	  WPD= GWDOMAIN;
	  WPPO= GWPO;
	  WPU= gwuser2;
	  FN= GW;
	  LN= User2;
	  S= User2;
	  G= GW;
	
	RESOLUTION
	==========
	
	For GroupWise 5.x
	-----------------
	
	1. Start NetWare Administrator.
	
	2. Double-click the API Gateway object.
	
	3. Click the Required Parameters button.
	
	4. Change the Addressing Format from GroupWise to Component.
	
	5. Click OK.
	
	6. Stop the API Gateway.
	
	7. Restart the ADA.
	
	8. Start the API Gateway.
	
	For GroupWise 4.x
	-----------------
	
	1. Start the Ad.exe program within a command prompt.
	
	2. Tab over to the System window.
	
	3. Highlight the API Gateway object.
	
	4. From the menu, select Actions, then Edit.
	
	5. Tab over to the Specific radio button, or press the S key.
	
	6. Change the Addressing Format from GroupWise to Component
	
	7. Stop the API Gateway.
	
	8. Restart the Message Server.
	
	9. Start the API Gateway.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
