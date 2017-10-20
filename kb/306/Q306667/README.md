---
layout: page
title: "Q306667: Server Certificate Button Unavailable in IIS"
permalink: /kb/306/Q306667/
---

## Q306667: Server Certificate Button Unavailable in IIS

{% raw %}

	Article: Q306667
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to generate a certificate request by using the Internet Information
	Services (IIS) Certificate Wizard from the properties of a site, the Server
	Certificate button may be unavailable or you may receive the following error
	message:
	
	  The Instruction at "0X64e6a38e" referenced memory at 0X00000000. The memory
	  could not be "read".
	
	CAUSE
	=====
	
	The Xenroll.dll file is not properly registered.
	
	RESOLUTION
	==========
	
	Xenroll.dll is located in the \Winnt\System32 directory. Follow these steps to
	reregister Xenroll.dll:
	
	1. Open Windows Explorer, expand the Winnt directory, and then click the
	  System32 directory.
	
	2. Click Start, click Run, and then type "Regsvr32" (without the quotation
	  marks) in the text box.
	
	3. In Windows Explorer, locate Xenroll.dll in the \Winnt\System32 directory, and
	  then drag Xenroll.dll into the text box that is described in step 2.
	
	4. Click OK. A message box states that the Xenroll.dll registration is
	  successful.
	
	MORE INFORMATION
	================
	
	The Certwiz.ocx control wizard calls the Xenroll.dll dynamic-link library (DLL)
	when you click Server Certificate.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Open Windows Explorer, expand the Winnt directory, and then click the
	  System32 directory.
	
	2. Click Start, click Run, and then type "Regsvr32 /u" (without the quotation
	  marks) in the text box.
	
	3. In Windows Explorer, locate Xenroll.dll in the \WINNT\System32 directory, and
	  then drag Xenroll.dll into the text box that is described in step 2.
	
	4. Click OK. A message box states that the Xenroll.dll unregistration is
	  successful.
	
	5. Open the IIS Service Manager Microsoft Management Console (MMC), right-click
	  a Web site, and then click Properties.
	
	6. In the site property window, click the Directory Security tab.
	
	7. Click Server Certificate to open the IIS Certificate Wizard.
	
	You receive the error message that is described in the "Symptoms" section.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q228821 Generating a Certificate Request File Using the Certificate Wizard in
	  IIS 5.0
	
	  Q290625 HOWTO: IIS5: How to Configure SSL in a Windows 2000 IIS 5 Test
	  Environment Using Certificate Server 2.0
	
	Additional query words: iis 5 certificate wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
