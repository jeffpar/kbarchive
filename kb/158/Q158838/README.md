---
layout: page
title: "Q158838: HOWTO: Setup the FOXISAPI Sample on Windows NT 4.0"
permalink: /kb/158/Q158838/
---

## Q158838: HOWTO: Setup the FOXISAPI Sample on Windows NT 4.0

	Article: Q158838
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbvfp500
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to get the Foxisapi sample to work on a Windows NT 4.0 server, you must
	use the DCOMCNFG utility to set permissions to have access rights and launch
	rights for the OLE Server.
	
	MORE INFORMATION
	================
	
	The Readme.txt in the Visual FoxPro \Samples\Servers\Foxisapi folder gives
	step-by-step instructions on how to build the Foxis.exe and where to put the
	files. In addition to the Readme.txt, you must use the DCOMCNFG utility to get
	any OLE Server to work correctly with Windows NT 4.0.
	
	The DCOMCNFG utility comes with Windows NT 4.0 and is located in the System32
	folder. Following are the steps to configure the Foxisapi sample on Windows NT
	4.0 Server:
	
	1. After following the steps in the Readme.txt and building the .exe file, run
	  the DCOMCNFG utility by clicking Run from the Start menu before you actually
	  setup the Foxis.exe on the server.
	
	2. Once DCOMCNFG appears, you should see three tabs, one of which is called
	  Default Security. Click this tab.
	
	3. In the Security tab, click the Edit Default button in the Default Access
	  Permissions section.
	
	4. Another dialog box appears. On this dialog box click Add. and yet another
	  dialog box appears. On the top is a combo box named "List Names From." Select
	  your machine name from the list.
	
	5. Click the Show Users button. In the list of Names you should see
	  IUSR_<MACHINE NAME> Internet Server Anonymous Account. Select this and
	  click add. If your machine name is MYNT, then you should see MYNT\IUSR_MYNT
	  in the Add Names box. Click OK.
	
	6. You should be back in the Registry Value Permission dialog box. Click OK.
	
	7. Click the Edit Default button in the Default Launch Permissions section, and
	  follow steps 4 through 6 again.
	
	8. Run setup of the FoxIsapi sample.
	
	9. In the DCOMCNFG utility, you should now see EMPLOYEE in the list of
	  applications. Select it and click properties.
	
	10. Click the Identity tab, and then select the Launching User option.
	
	  NOTE: You can also click the This User option and specify a valid userid and
	  password.
	
	11. Click the Apply button.
	
	12. You should be back to the main dialog box. Click OK.
	
	You are now ready to run from the Internet browser. If you get "Access Denied"
	errors, go back through these steps and make sure the permissions are set
	correctly. You might also try rebooting the server.
	
	REFERENCES
	==========
	
	For more information about Building the Foxisap.exe, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q158839 Updated Readme.txt for FoxIsapi Sample
	
	For more information about the DCOMCNFG utility and setup of OLE Servers on NT
	4.0, please see the following article in the Microsoft Knowledge Base:
	
	  Q156223 How To Launch OLE Servers from ISAPI Extensions
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Issue type        : kbhowto
	
	=============================================================================
	
