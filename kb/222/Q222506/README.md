---
layout: page
title: "Q222506: XFOR: GroupWise Connector Directory Synchronization Overview"
permalink: /kb/222/Q222506/
---

## Q222506: XFOR: GroupWise Connector Directory Synchronization Overview

	Article: Q222506
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Connector for Novell GroupWise uses the Novell GroupWise
	API Gateway to request directory information from GroupWise, and also to import
	directory information back to GroupWise.
	
	MORE INFORMATION
	================
	
	When the GroupWise Connector is requested to do a Full Load (Exchange Server to
	GroupWise directory synchronization) through the Exchange Administrator program,
	the following takes place:
	
	1. The GroupWise Connector places a request in the form of an .api file in the
	  Novell GroupWise API Gateway's API_IN directory to request a list of all
	  Exchange Server users. The following is an example of the API file.
	
	  WPC-API= 1.2; 
	  Msg-Type= Admin; 
	  DS-User= 
	   Domain= EXCHANGE; 
	   Post-Office= US; 
	   Operation= List; 
	   Visibility= System; 
	   Gw-Alias=; 
	   ; 
	  -END-
	
	2. The GroupWise Connector will process the response from the API Gateway
	  through the API_OUT directory. The Connector will then compare the list of
	  users currently in the Exchange directory to the response from GroupWise to
	  determine how many directory synchronization transactions to send to
	  GroupWise. Here's a sample of the response .api file from GroupWise.
	
	  WPC-API= 1.2; 
	  Header-Char= T50; 
	  Msg-Type= ADMIN; 
	  # The query information was:
	  #            Type = DS-User
	  #          Domain = EXCHANGE
	  #     Post Office = US
	
	  DS-User= 
	   Operation= List; 
	   Domain= Exchange; 
	   Post-Office= US; 
	   Object= Administrator; 
	   Visibility= System; 
	   Description= Administrator; 
	   First-Name= Administrator; 
	   Gw-Alias= 
	       Type= exchange; 
	       External-Name= Administrator@EXCHANGE; 
	   ;
	  ;
	  -END-
	
	3. The GroupWise Connector then places a request in the Novell GroupWise API
	  Gateway's API_IN directory to add, modify, or delete users to maintain
	  synchronization. The GroupWise Connector actually places two .api files into
	  the API Gateway. The first file is to add the post office for the Exchange
	  Server users in GroupWise to ensure that the post office exists before adding
	  users. The second file contains the additions, modifications, and deletions
	  of user accounts. The following is a sample .api file for adding the post
	  office, followed by the second .api file for adding users.
	
	  WPC-API= 1.2; 
	  Msg-Type= Admin; 
	  DS-External-Post-Office= 
	   Operation= Add; 
	   Domain= EXCHANGE; 
	   Post-Office= US; 
	   Time-Zone= gmt; 
	   ; 
	  -END-
	
	  WPC-API= 1.2; 
	  Msg-Type= Admin; 
	  DS-User= 
	   Operation= Modify; 
	   Visibility= System; 
	   Domain= Exchange; 
	   Post-Office= US; 
	   Object= Administrator; 
	   Last-Name= \\; 
	   First-Name= Administrator; 
	   Description= Administrator; 
	   Account-ID= \\; 
	   Title= \\; 
	   Department= \\; 
	   Phone= \\; 
	   Fax= \\; 
	   Network-ID= \\; 
	   Gw-Alias= 
	       Type= exchange; 
	       External-Name= Administrator@EXCHANGE; ; 
	   ;
	  -END-
	
	When the GroupWise Connector is requested to do a Full Load (GroupWise to
	Exchange Server directory synchronization) through the Exchange Administrator
	program, the following takes place:
	
	1. The GroupWise Connector places a request in the form of an .api file in the
	  Novell GroupWise API Gateway's API_IN directory to request a list of all
	  users in the GroupWise directory. The following is a sample of this .api
	  file.
	
	  WPC-API= 1.2; 
	  Msg-Type= Admin; 
	  -GET-DIRECTORY- 
	  -END-
	
	2. The GroupWise Connector will process the response from the API Gateway
	  through the API_OUT directory. The Connector will then make appropriate
	  changes to the GroupWise custom recipients in Exchange Server. Here's a
	  sample response .api file from GroupWise.
	
	  WPC-API= 1.2; 
	  Header-Char= T50; 
	  Msg-Type= ADMIN; 
	  DS-User= 
	   Operation= List; 
	   Domain= Exchange; 
	   Post-Office= US; 
	   Object= Administrator; 
	   Visibility= System; 
	   Description= Administrator; 
	   First-Name= Administrator; 
	   Gw-Alias= 
	       Type= exchange; 
	       External-Name= Administrator@BRIANCL001; 
	   ;
	  ;
	  DS-User= 
	   Operation= List; 
	   Domain= GWDOMAIN; 
	   Post-Office= GWPO; 
	   Object= GWUser1; 
	   Visibility= System; 
	   Last-Name= User1; 
	   Network-ID= GWUser.ORG; 
	   First-Name= GW; 
	  ;
	  DS-User= 
	   Operation= List; 
	   Domain= GWDOMAIN; 
	   Post-Office= GWPO; 
	   Object= GWUser2; 
	   Visibility= System; 
	   Last-Name= User2; 
	   First-Name= GW; 
	   Network-ID= NewUser.ORG; 
	  ;
	  -END-
	
	For additional information on the Novell GroupWise API Gateway, refer to the
	following Web page:
	
	  http://www.novell.com/groupwise/administration/gw52/us/gwapi.html
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
