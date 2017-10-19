---
layout: page
title: "Q96605: FFAPI: Err Msg: 80 - Bad Gateway Service Type on Create"
permalink: /kb/096/Q96605/
---

## Q96605: FFAPI: Err Msg: 80 - Bad Gateway Service Type on Create

	Article: Q96605
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Mail Software Development Kit: File Format Application
	Programming Interface (FFAPI) version 3.0, an attempt to use GTWCFG.EXE,
	LGTWCFG.EXE, or OGTWCFG.EXE (gateway configure) to create a new FFAPI postoffice
	fails and the application generates this message:
	
	  80 - Bad Gateway Service Type on Create
	
	CAUSE
	=====
	
	This error can occur when the FFAPI network name has been used as a Microsoft
	Mail network name. While a postoffice can contain any number of network or
	postoffice definitions, you cannot share the name of a network between an FFAPI
	and a Microsoft Mail postoffice.
	
	RESOLUTION
	==========
	
	More than one FFAPI postoffice can use the same network name if one of the FFAPI
	gateway configure programs creates the network.
	
	For example, if you create a Network/Postoffice as follows:
	
	  GTWCFG -aadmin:password -dm -cNET1/PO1
	
	This step works correctly if NET1/PO1 does not already exist. Then use ADMIN.EXE
	to create another Network/Postoffice with "Network=Net2" and "Postoffice=PO1."
	This attempt fails and ADMIN generates one of these messages:
	
	  80 - Bad Gateway Service Type on Create
	
	  -or-
	
	  80 - Bad Gateway Service Type on Create
	
	Note: This error is not related to the same error message in FFAPI versions 2.1
	and earlier, which required the -T parameter to specify the service type.
	
	For more information about using the ADMIN program to create external Networks
	and Postoffices, please refer to the "Microsoft Mail for PC Networks
	Administrator's Guide" for version 3.0.
	
	For more information about using FFAPI and creating FFAPI postoffices, please
	refer to the Microsoft Mail Software Development Kit "File Format API for
	Gateways and Applications" manual for version 3.0.
	
	Additional query words: 3.00 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
