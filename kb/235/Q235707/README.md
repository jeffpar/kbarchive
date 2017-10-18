---
layout: page
title: "Q235707: Frequently Asked Questions (FAQ) About VBCE 6.0"
permalink: kb/235/Q235707/
---

## Q235707: Frequently Asked Questions (FAQ) About VBCE 6.0

	Article: Q235707
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 29-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers some of the most frequently asked questions (FAQs) about the
	Windows CE Toolkit for Visual Basic 6.0 (VBCE 6.0).
	
	MORE INFORMATION
	================
	
	The following questions are answered in this FAQ:
	
	1. Where can I find technical information about VBCE?
	
	2. What other products do I need in order to use VBCE 6.0?
	
	3. Does VBCE provide database programmability?
	
	4. Where can I find technical information about ADOCE?
	
	5. Does ADOCE work in the emulation environment?
	
	6. Can I develop VBCE applications for Palm-size PCs?
	
	7. For which Windows CE platforms can I develop VBCE applications?
	
	8. Are ActiveX controls supported in VBCE? Where can I get them?
	
	9. Are the same Visual Basic controls supported in VBCE?
	
	10. Can I use Windows 95, Windows 98, or Windows Me to develop VBCE
	  applications?
	
	11. Can existing Visual Basic applications be ported to VBCE?
	
	12. How do I debug VBCE applications?
	
	13. How do I distribute my VBCE application?
	
	14. Can I access Pocket Outlook contacts, tasks, etc. from VBCE?
	
	15. Can I call APIs in VBCE applications?
	
	16. Do I need a Windows CE device to run VBCE?
	
	17. I'm confused. Which devices and platforms will VBCE 6.0 and ADOCE run on?
	
	Questions and Answers
	---------------------
	
	1. Q: Where can I find technical information about VBCE?
	
	A: There are a number of places to look for documentation on VBCE. In addition to
	the Windows CE Toolkit online help available from the Visual Basic Help menu,
	you can also check the following resources:
	
	   - The Microsoft Knowledge Base contains many articles discussing topics
	     related to VBCE. To search for them, navigate to the following Microsoft
	     Web site, enter the search phrase "VBCE" (without the quotation marks) and
	     include Knowledge Base in the selected scope:
	
	  MSDN Online
	
	   - The VBCE Release Notes contain lots of information on known issues. Many
	     commonly-asked questions about specific behavior can be found in this
	     document. In addition to the file installed with VBCE, the release notes
	     can be found in the following Microsoft Knowledge Base article:
	
	  Q217375 INFO: Windows CE Toolkit for Visual Basic 6.0 Release Notes
	
	   - The MSDN Online Library now has a number of areas with technical articles,
	     presentations, downloads and online special interest groups related to
	     VBCE:
	
	  MSDN Library Online
	
	See:
	    \Windows CE Documentation
	       \Visual Development Environment
	          \Windows CE Toolkit for Visual Basic 6.0
	
	  Microsoft Windows CE Toolkits Home Page
	
	   - Scott Lewis' VBCE.COM is also a very good source for information. Scott
	     also has a mailing list set up for peer-to-peer support available from
	     this site. NOTE: VBCE.COM is not affiliated with Microsoft other than it
	     refers to a Microsoft product:
	
	  VBCE.COM
	
	   - Larry Roof's "Visual Basic Windows CE Programming" by Wrox Press, although
	     written for the first version of VBCE, is still a great resource.
	     Additionally, I believe that Larry Roof and Scott Lewis will be teaming up
	     for some technical content as outlined on VBCE.COM.
	
	2. Q: What other products do I need in order to use VBCE 6.0?
	
	A: In order to use VBCE 6.0, you'll need the following:
	
	   - Microsoft Windows 95 or later or Windows NT 4.0 with Service Pack 3 or
	     later.
	   - Microsoft Visual Basic 6.0 Professional or Enterprise Edition.
	
	Note that Windows NT or Windows 2000 is required for emulation.
	
	3. Q: Does VBCE provide database programmability?
	
	A: VBCE is able to provide database programmability via the ActiveX Data Objects
	control for the Microsoft Windows CE operating system (ADOCE), which provides a
	subset of ADO for Windows CE. The setup program for ADOCE is included on the
	VBCE 6.0 CD in the ADOCE directory.
	
	Here are some important notes regarding the two current versions of ADOCE:
	
	   - ADOCE 2.0 only works on an H/PC 2.0 device that runs Windows CE 2.0.
	   - ADOCE 2.0 does not support automatic Database Table Synchronization
	     between the database tables on the desktop and the device.
	   - ADOCE 2.1 only works on H/PC Pro 3.0 devices (running Windows CE 2.11),
	     Palm-size PC 1.2 devices (running Windows CE 2.11 and with the Palm-size
	     PC 1.2 SDK installed), and the H/PC devices with ROM upgrades (that is,
	     running Windows CE 2.11).
	   - ADOCE 2.1 supports automatic Database Table Synchronization.
	
	For additional information about ADOCE, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q238947 FILE: Msadoce2.exe Installs ADO for Windows CE SDK
	
	  Q196034 HOWTO: Use ADOFILTR.DLL to Transfer Database Tables
	
	4. Q: Where can I find technical information about ADOCE?
	
	A: There are a number of places to look for documentation on ADOCE. In addition
	to the Windows CE Toolkit online help available from the Visual Basic Help menu,
	you can also check the following resources:
	
	   - The Microsoft Knowledge Base contains many articles discussing topics
	     related to ADOCE. To search for them, navigate to the following Microsoft
	     Web site, enter the search phrase "ADOCE " (without the quotation
	     marks)and include Knowledge Base in the selected scope:
	
	  MSDN Online
	
	   - The MSDN Online Library now has a number of areas with technical articles,
	     presentations, downloads, and online special interest groups related to
	     ADOCE:
	
	  MSDN Library Online
	
	See:
	    \Windows CE Documentation
	       \Visual Development Environment
	          \ADO for Windows CE
	
	  Microsoft Windows CE Toolkits Home Page
	
	   - Scott Lewis' VBCE.COM is also a very good source for information. Scott
	     has also got a mailing list set up for peer-to-peer support available from
	     this site. NOTE: VBCE.COM is not affiliated with Microsoft other than it
	     refers to a Microsoft product:
	
	  VBCE.COM
	
	5. Q: Does ADOCE work in the emulation environment?
	
	ADOCE does work in the emulation environment. You'll need to ensure that you
	install the emulation components as a part of the ADOCE SDK installation from
	the VBCE 6.0 CD-ROM. You'll also need to ensure that you have copied your
	database tables to the emulation environment by using the EmpFile utility. For
	an illustration of how to do this, please see the EmulDB sample that ships with
	the ADOCE SDK. This sample is located, by default, in the following location:
	
	  C:\Program Files\Microsoft Visual Studio\Common\ADOCE\Samples\VB
	
	For additional information about the EmpFile utility, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q212884 INFO: VBCE: How to Use the EmpFile Utility
	
	6. Q: Can I develop VBCE applications for Palm-size PCs?
	
	A: Palm-size PCs can be targeted with VBCE 6.0. The target Palm-size PCs must be
	running at least the Windows CE operating system version 2.11. Please note that
	the implementation of the Windows CE operating system on the Palm-size PC
	devices running the Windows CE operating system version 2.0 does not include
	sufficient COM support for VBCE applications.
	
	In order to target Palm-size PCs, the associated Windows CE Palm-size PC Platform
	SDK is required:
	
	  Palm-size PC 1.2 SDK Download (English)
	
	For additional information about the Palm-size PC's support for VBCE
	applications, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q191478 INFO: Palm-size PC Does Not Support VBCE Applications
	
	7. Q: For which Windows CE platforms can I develop VBCE applications?
	
	A: VBCE 6.0 can currently target the following Windows CE platforms using the
	Platform SDKs provided by Microsoft:
	
	   - Handheld PC version 2.0 (H/PC)
	
	   - Handheld PC version 3.0 (H/PC Pro)
	
	   - Palm-size PC version 1.2 (PsPC)
	
	For additional information, please see the following Microsoft Web site:
	
	  Hardware Devices, Software Development Kits (SDKs)
	
	Also, please note that VBCE 5.0 applications can only be created for H/PC
	devices.
	
	8. Q: Are ActiveX controls supported in VBCE? Where can I get them?
	
	A: Yes. ActiveX is supported in Windows CE and you can use ActiveX controls in
	your VBCE applications. Currently, however, you cannot develop ActiveX controls
	using VBCE. Instead, you must use the Windows CE Toolkit for Visual C++ (VCCE)
	for ActiveX control development.
	
	Additionally, there are a growing number of third-party companies that are either
	developing or looking into developing ActiveX controls for use in VBCE. See one
	of Microsoft's Windows CE Web sites for the most current information:
	
	  Microsoft Windows CE Home Page
	
	  Microsoft Windows CE Toolkits
	
	9. Q: Are the same Visual Basic controls supported in VBCE?
	
	A: Most Visual Basic intrinsic controls (such as CheckBoxes, TextBoxes,
	CommandButtons) are supported in VBCE. There are some differences in control
	appearance and behavior corresponding to differences in the Windows CE user
	interface model, however, and there are also differences in the Visual Basic
	built-in functions corresponding to differences in operating system features.
	For the most part, you will find that creating VBCE applications is very similar
	to creating Visual Basic applications on Windows 95, Windows 98, or Windows NT.
	
	10. Q: Can I use Windows 95, Windows 98, or Windows Me to develop VBCE
	  applications?
	
	Yes. The Windows CE Toolkit for Visual Basic 6.0 can be installed on Windows 95,
	Windows 98, or Windows Me to develop Windows CE applications. The emulation
	environment, however, is available only under Windows NT or Windows 2000.
	Additionally, it is important to note that Windows CE Toolkit for Visual Basic
	5.0 cannot be installed on a Windows 95, Windows 98, or Windows Me machine.
	
	11. Q: Can existing Visual Basic applications be ported to VBCE?
	
	A: You cannot directly port an existing Visual Basic application into VBCE due to
	some limitations and unsupported features in VBCE. The amount of work required
	to "port" an existing Visual Basic desktop application to VBCE will depend on
	many factors, including the complexity of the application and whether it uses
	features not supported in VBCE. It may be significantly easier to create a VBCE
	application from scratch than to port an existing Visual Basic application.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q186266 INFO: What Is Handled Differently in Windows CE and VBCE
	
	  Q184650 INFO: What Does Visual Basic Have That VBCE Doesn't Have?
	
	  Q189478 INFO: What Does VBCE Have That Visual Basic 5 Doesn't Have?
	
	  Q192459 INFO: Unsupported Controls, Properties, Methods and Events
	
	12. Q: How do I debug VBCE applications?
	
	A: There are two methods of debugging available for VBCE users. The first is to
	use the emulation environment to debug your application right on your Windows NT
	development workstation. The second is to use the remote debugging tools
	provided with the Toolkit. These tools let you execute your VBCE application
	remotely on your Windows CE device, while at the same time monitoring and
	controlling its execution from your Windows NT or Windows 2000 development
	workstation.
	
	For additional information about Debugging VBCE applications and differences
	between emulation and the remote device, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q192549 INFO: VBCE: Overview of Debugging VBCE Applications
	
	  Q192998 INFO: VBCE: Differences Between Emulation and the Remote Device
	
	13. Q: How do I distribute my VBCE application?
	
	A: Distribution of VBCE applications can be accomplished using the Application
	Install Wizard supplied with VBCE.
	
	For additional information about distributing VBCE applications, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q194837 HOWTO: Distribute a Visual Basic Windows CE Application
	
	14. Q: Can I access Pocket Outlook contacts, tasks, and so forth from VBCE?
	
	A: Using the new Pocket Outlook Object Model (POOM) you can now read, create, and
	modify items used by the Pocket Outlook's Calendar, Tasks, and Contacts, as well
	as accessing and creating cities used by the World Clock.
	
	In order to access Pocket Outlook objects, the Pocket Outlook Object Model (POOM)
	SDK is required:
	
	  Pocket Outlook Object Model (POOM) SDK
	
	For additional information about using the POOM from VBCE, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q208568 HOWTO: Access Pocket Outlook Objects from VBCE
	
	15. Q: Can I call APIs in VBCE applications?
	
	A: The current version of VBCE allows you to call many Windows CE API functions
	directly. You can use the existing Visual Basic API Text Viewer to view the API
	information from the winceapi.txt file. In certain circumstances, because VBCE
	does not support structure data type, you may still need to use the Windows CE
	Toolkit for Visual C++ (VCCE) to create an ActiveX control to wrap the
	appropriate API calls and then host the control in VBCE.
	
	Please note that API calls could not be made from VBCE 5.0 applications.
	
	16. Q: Do I need a Windows CE device to run VBCE?
	
	A: You do not need a device to begin developing VBCE applications. You can create
	and debug Windows CE-based applications from your desktop. Built-in emulation
	technology provides the look and function of a device, right on your PC.
	
	It should be noted that in order to install ADOCE, Windows CE Services is
	required. Windows CE Services only ships with the devices. So although ADOCE
	will work in the emulation environment, currently it cannot be installed without
	the presence of Windows CE Services.
	
	17. I'm confused. Which devices and platforms will VBCE 6.0 and ADOCE run on?
	
	A: The following table lists what is supported and what is not:
	
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|              | Handheld PC 2.0     | Handheld PC with ROM Upgrade     | Handheld PC Professional Edition 3.0 | Palm-size PC 1.2                                        | Palm-size PC 1.0 | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| OS Version   | Windows CE 2.0      | Windows CE 2.11                  | Windows CE 2.11                      | Windows CE 2.11                                         | Windows CE 2.0   | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| VBCE 5.0     | Supports            | Does not Support                 | Does not Support                     | Does not Support                                        | Does not Support | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| VBCE 6.0     | Supports            | Supports                         | Supports                             | Supports                                                | Does not Support | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| ADOCE 2.0    | Supports            | Does not Support                 | Does not Support                     | Does not Support                                        | Does not Support | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| ADOCE 2.1    | Does not Support    | Supports                         | Supports                             | Supports (must have the Palm-size PC 1.2 SDK installed) | Does not Support | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Platform SDK | Handheld PC 2.0 SDK | Handheld PC Professional 3.0 SDK | Handheld PC Professional 3.0 SDK     | Palm-size PC 1.2 SDK                                    | Does not Support | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	REFERENCES
	==========
	
	Windows CE Toolkit for Visual Basic 6.0 Online Help
	MSDN Library Online
	Microsoft Windows CE Toolkits Home Page
	
	Additional query words: vbce vbce5 vbce6 wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
