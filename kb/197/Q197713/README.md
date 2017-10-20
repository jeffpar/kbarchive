---
layout: page
title: "Q197713: XCLN: ErrMsg: Authenticode Signature not Found with ODK"
permalink: /kb/197/Q197713/
---

## Q197713: XCLN: ErrMsg: Authenticode Signature not Found with ODK

{% raw %}

	Article: Q197713
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Outlook 98 Setup from an Outlook Deployment Kit (ODK)
	package that has Authenticode 2.0 installed, you may receive the following error
	message:
	
	  Dialog Box Title: Security Warning
	  Do you want to install and run <drive>:
	  Outlook98\CD\En\Packages\Setup.exe
	
	  The publisher cannot be determined due to the problems below:
	  Authenticode Signature Not Found.
	  Yes No More Info....
	
	Clicking Yes invokes another dialog box with the following error message:
	
	  Dialog Box Title: Security Warning
	  Do you want to install and run <drive>:
	  Outlook98\CD\En\Packages\outcif.cab
	  The publisher cannot be determined due to the problems below:
	  Authenticode Signature Not Found.
	  Yes No More Info....
	
	As of Internet Explorer 4.01 Service Pack 2 and Internet Explorer 5, there are
	two more symptoms of unsigned CABs:
	
	- Silent installations unexpectedly stop without any error message or logged
	  event (in the case of Windows NT).
	
	- A regular installation yields the error message:
	
	  Setup could not verify the information needed for installation.
	
	  Please make sure your system clock reflects the current time, then run Setup
	  again.
	
	This problem is a result of an updated Wintrust.dll file. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q235668 XCLN: Error Deploying Outlook 98 Using the ODK on Systems with
	  Internet Explorer 5 or 4.0 Service Pack 2
	
	CAUSE
	=====
	
	Active Setup uses Authenticode technology (digital signatures) to ensure that
	the contents of a component have not been altered. All files need to be
	digitally signed. This is clearly spelled out in the dialog box the ODK displays
	when it finishes building a custom package.
	
	The following information is from the Microsoft Outlook Deployment Kit Stage 2:
	Specify Trusted Publishers:
	
	  You should digitally sign your customized package and any custom programs to
	  ensure that users do not receive warnings during installation.
	
	  After you create your customized package, you must sign the following files:
	
	  Branding.cab
	  Chl<xxxx>.cab
	  Desktop.cab
	  Folder<n>.cab
	  Outcif.cab
	  Setup.exe
	
	  NOTE: For Chl<xxxx>.cab, this only refers to files where x is a numeric
	  value (for example, Chl99.cab).
	
	WORKAROUND
	==========
	
	When creating customized packages, you should sign the custom cabinet (.cab)
	files created by the wizard before you post them.
	
	Signing the .cab files and custom programs requires the following two steps:
	
	1. Obtain a digital certificate.
	
	2. Sign the code.
	
	NOTE: MakeCert, Cert2SPC, and Signcode are tools you can use to sign and test
	code. These tools are available in the \Program Files\ODK\Reskit\Addons\Tools
	folder. You can find additional resources in the Microsoft Internet Client SDK.
	Follow these steps to create a test certificate to sign files:
	
	1. Navigate to C:\Program Files\ODK\Reskit\Addons\Tools.
	
	2. At a command prompt, type the following command line exactly as it appears
	  here, and then press Enter:
	
	  makecert -r -k:mykey.pvk -d:"My Test Certificate" mykey.cer
	
	3. At a command prompt, type the following command line exactly as it appears
	  here, and then press Enter:
	
	  cert2spc mykey.cer mykey.spc
	
	4. At a command prompt, type the following command line exactly as it appears
	  here, and then press Enter:
	
	  signcode -spc mykey.spc -v mykey.pvk <filename>
	
	  Where <filename> is the path and filename of the file that you want to
	  sign.
	
	To test the certificate of any file, at a command prompt, type the following:
	
	  chktrust <filename>
	
	MORE INFORMATION
	================
	
	Certificates may also be obtained from one of two sources: a certificate
	authority (CA), such as VeriSign or GTE, can provide certificates, or a
	privately controlled certificate server can issue certificates. You must accept
	the certificate on your computer. The wizard prompts you to select the publisher
	certificates you will use to sign the files in your package.
	
	After obtaining a certificate, you will need to sign the code. Tools for signing
	code, such as the Code Signing wizard (Signcode.exe), are available in the
	\Program Files\ODK\Reskit\Addons\Tools folder.
	
	For more information about signing code, see the Microsoft Security Advisor Web
	site at http://www.microsoft.com/security/.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
