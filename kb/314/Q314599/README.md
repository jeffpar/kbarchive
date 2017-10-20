---
layout: page
title: "Q314599: Encarta: Err Msg: Error Starting Program...Shrl30.dll"
permalink: /kb/314/Q314599/
---

## Q314599: Encarta: Err Msg: Error Starting Program...Shrl30.dll

{% raw %}

	Article: Q314599
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta Reference Suite 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Encarta, you may receive the following error
	message:
	
	  Error starting program.
	  A required .DLL file, SHRL30.DLL, was not found.
	
	CAUSE
	=====
	
	The W32.Sircam.Worm@mm worm virus can cause this issue. The W32/Sircam virus
	spreads itself through e-mail messages or unprotected network file shares and
	can reveal or delete information on your computer.
	
	
	To verify that your computer is infected with this type of virus, follow these
	steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, click Run, type "regedit" (without the quotation marks) in the
	  Open box, and then press ENTER.
	
	2. If the following registry key is set to C:\recycled\sirc32.exe "%1" %* (with
	  quotation marks), your computer is infected with the W32/SirCam worm virus:
	
	  HKEY_CLASSES_ROOT\exefile\shell\open\command
	
	If this registry setting is anything other than "%1" %*" (with quotation marks),
	your computer may be infected with a different virus.
	
	RESOLUTION
	==========
	
	Microsoft does not provide software that can detect or remove computer viruses.
	If you suspect or confirm that your computer is infected with a virus, obtain
	current antivirus software. For a list of antivirus software manufacturers,
	click the following article number to see the article in the Microsoft Knowledge
	Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	
	MORE INFORMATION
	================
	
	How to Try to Prevent the Virus from Running
	--------------------------------------------
	
	
	IMPORTANT: The following procedure only prevents the virus from running so that
	you can run an updated antivirus program or W32/Sircam virus-removal tool. While
	you work to resolve this issue, physically disconnect all of your infected
	computers from the Internet or any other networks. For detailed instructions
	about how to recover an infected computer, please see the following Carnegie
	Mellon Web site:
	
	  http://www.cert.org/tech_tips/root_compromise.html
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	1. Verify that your computer is infected with the W32.Sircam.Worm@mm worm virus.
	  For information about how to do so, view the steps that are included in the
	  "Cause" section of this article. If your computer is infected with the
	  W32.Sircam.Worm@mm worm virus, continue to step 2. If your computer is not
	  infected with the W32.Sircam.Worm@mm worm virus, skip the remaining steps,
	  and follow the instructions that are included in the "Resolution" section of
	  this article.
	
	2. Use Registry Editor to change the (Default) string value in the following
	  registry key to "%1" %* (with quotation marks):
	
	  HKEY_CLASSES_ROOT\exefile\shell\open\command\
	
	3. At a command prompt, type "cd \" (without the quotation marks), and then
	  press ENTER.
	
	4. At a command prompt, type "del /f /s /a sirc32.exe" (without the quotation
	  marks), and then press ENTER.
	
	5. At a command prompt, type "del /f /s /a scam32.exe" (without the quotation
	  marks), and then press ENTER.
	
	6. Restart the computer.
	
	7. Follow the instructions that are included in the "Resolution" section of this
	  article.
	
	The W32.Sircam.Worm@mm worm virus modifies the registry so that all executable
	(exe) files are launched through the virus file, Sirc32.exe, which resides in
	the C:\recycled folder. This alteration in the registry forces executable
	programs to run as a command line argument to the Sirc32.exe file. Through the
	course of the upgrade to Windows XP the Sirc32.exe file is removed.
	
	The removal of the Sirc32.exe virus without modification of the
	HKEY_CLASSES_ROOT\Exefile\Shell\Open\Command key will invalidate every
	executable file on the computer because, according to this line in the registry,
	the executable files are to be run as a command line parameter to the Sirc32.exe
	file (which no longer exists). This prompts the "Windows cannot find" message
	when attempting to start the executable file.
	
	Additional Information About How to Remove W32/Sircam Virus
	-----------------------------------------------------------
	
	For additional information about how to properly remove the W32/Sircam virus,
	please see the following third-party Web sites:
	
	  http://www.symantec.com/avcenter/venc/data/w32.sircam.worm@mm.html
	
	  http://vil.nai.com/vil/virusRemovalInstructions.asp?virus_k=99141
	
	  http://www.datafellows.com/v-descs/sircam.shtml
	
	  http://www.antivirus.com/vinfo/security/sircam_descrip.htm
	
	Availability of W32.Sircam.Worm@mm Removal Tools
	------------------------------------------------
	
	For information about tools you can use to properly remove the W32/Sircam virus,
	please see the following third-party Web sites:
	
	  http://www.symantec.com/avcenter/venc/data/w32.sircam.worm@mm.removal.tool.html
	
	  http://www.antivirus.com/vinfo/virusencyclo/default5.asp?VName=TROJ_SIRCAM.A
	
	For more information about the W32/Sircam virus and additional anti-virus vendor
	references, please see the "CA-2001-22 W32/Sircam Malicious Code" CERT Advisory
	at the following Carnegie Mellon Web site:
	
	  http://www.cert.org/advisories/CA-2001-22.html
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q306913 Error Message Caused by Sircam32 Virus When You Start a Program
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: rundll32 exe Error starting program A required DLL file SHRL30.DLL was not found
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference2000 kbEncartaReference2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
