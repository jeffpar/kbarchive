---
layout: page
title: "Q314818: FIX: Error Assigning MSSOAP Connector.OutPutStream to Variable"
permalink: /kb/314/Q314818/
---

## Q314818: FIX: Error Assigning MSSOAP Connector.OutPutStream to Variable

	Article: Q314818
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an instance of the HttpConnector interface from Visual FoxPro
	7.0, and then assign the OutputStream property to a variable, if you attempt to
	access IntelliSense for that variable, the following error message appears and
	Visual FoxPro closes:
	
	  Fatal error: Exception code=C0000005
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	The HttpConnector interface is defined in the Microsoft Simple Object Access
	Protocol (SOAP) object library. The Microsoft Developer Network (MSDN) Help
	topic for HttpConnector says the following:
	
	  "Implements the standard HTTP protocol binding for objects that send and
	  receive Simple Object Access Protocol (SOAP) messages. HttpConnector is an
	  HTTP-specific implementation of the SoapConnector interface."
	
	Steps to Reproduce Behavior
	---------------------------
	
	These steps assume that you have installed the Microsoft SOAP 2.0 Toolkit or
	later and that you have IntelliSense enabled in Visual FoxPro 7.0.
	
	1. From the Visual FoxPro 7.0 Command window, execute the following lines of
	  code:
	
	  oSOAPHTTP = NEWOBJECT("mssoap.httpconnector")
	  oStream = oSOAPHTTP.outputstream
	  oStream
	
	2. Place the cursor after the oStream text and press the PERIOD key to activate
	  IntelliSense.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
