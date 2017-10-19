---
layout: page
title: "Q184055: IIS: Certificate Security Affected By Schannel.dll"
permalink: /kb/184/Q184055/
---

## Q184055: IIS: Certificate Security Affected By Schannel.dll

	Article: Q184055
	Product(s): Internet Information Server
	Version(s): WINNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Certificate on a computer running Microsoft Internet
	Information Server, there will be no indication of an error. However, HTTPS
	access will not be possible. Turning off the "Require secure channel SSL" option
	in the Microsoft Internet Service Manager and stopping and restarting the
	service enables access through HTTP.
	
	CAUSE
	=====
	
	The security strength of the Schannel.dll file on the computer where the key
	request was generated does not match the security strength of the server upon
	which the certificate is installed.
	
	RESOLUTION
	==========
	
	Match the security strength of the Schannel.dll file on the requesting computer
	with the security strength of the Schannel.dll file on the server that will be
	using the generated Certificate. To do this, perform the following steps:
	
	1. Open Windows NT Explorer on the computer creating the request file.
	
	2. Go to the <System root>\System32 subdirectory.
	
	3. Highlight the file and open the properties page. If the file is not found,
	  check the Options in the Tool menu and ensure that the View All Files option
	  is checked.
	
	4. Click the Version tab of the SCHANNEL.DLL properties page.
	
	Security strength is easiest defined by the description. If the description
	references "(Export)" then the DLL is the 40 bit encryption version. If the
	description references "(US and Canada" then the DLL is the 128 bit encryption
	version. (Note: The missing right bracket on the US and Canada version is not a
	typographical error.)
	
	Although it is possible to generate a functional key request from a computer
	other than the one on which it will be used, requesting the certificate from the
	computer that will eventually use the key will avoid security mismatches.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WINNT:3.0
	Issue type        : kbprb
	
	=============================================================================
	
