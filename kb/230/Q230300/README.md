---
layout: page
title: "Q230300: Contents of Connection Manager Administration Kit Release Notes"
permalink: /kb/230/Q230300/
---

## Q230300: Contents of Connection Manager Administration Kit Release Notes

	Article: Q230300
	Product(s): Internet Information Server
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "More Information" section of this article contains a copy of the Connection
	Manager Administration Kit Release Notes included with the Windows NT 4.0 Option
	Pack. It is listed here so that the issues it covers will be included in queries
	that are performed against the Knowledge Base.
	
	The file containing these Release Notes is located at
	<%SystemRoot%>\Help\iis\htm\core\cmakread.htm.
	
	NOTE: Knowledge Base articles may be distributed in either ASCII-text or HTML
	form. If you are viewing the ASCII-text version of this article, some formatting
	may have been lost when it was converted from the original HTML form of
	cmakread.htm.
	
	MORE INFORMATION
	================
	
	Connection Manager Administration Kit Readme
	Known Issues with Connection Manager Administration Kit 
	Known Issues with Connection Manager 
	For More Information 
	Before installing this product, please review this entire document and read the Connection Manager Administration Kit Guide. The document contains critical information for ensuring proper installation and use of the product.
	
	Important   This readme contains important, late-breaking information about this product.
	
	Known Issues with Connection Manager Administration Kit
	
	Windows 3.1x features for Connection Manager are not supported for this release. A version of Connection Manager for Windows 3.1x should be available in a future release. 
	Service profiles built with a version of the wizard from beta 2 or earlier are not compatible with this version of the wizard. You cannot edit such profiles with the wizard, or build new profiles based on such profiles. 
	Long file names are not supported. 
	The service profile cannot install Connection Manager in a subdirectory whose path name is longer than 256 characters. 
	If you need to have a program run immediately after your users run their service profile executable (for example, if you have a readme file you want to automatically display, or if you have included a program in the service profile that copies their dial-up networking settings to their .cmp file so that their connection setting will be preserved), this functionality is now available. 
	To do this, create the service profile, and then add the name of the program you want to run, plus any command line switches or options, to the [RunPostSetupCommandsSection] section of the .inf file associated with the service profile (If you want this change to apply to all other service profiles you create as well, make the same change to the template.inf file in \Program Files\CMAK\cm32\enu).
	
	For example, if the program is Myprogram.exe, then the [RunPostSetupCommandsSection] section would appear as follows:
	
	[RunPostSetupCommandsSection] 
	Myprogram.exe /options? /switches 
	
	When building PPTP-enabled or browser-agnostic profiles on a computer with 32MB RAM or less, the wizard may become extremely slow or even appear to stop. To gain better performance, try building the profile on a machine with greater than 32MB RAM. 
	When creating a service profile by using Connection Manager Administration Kit, do not use characters typed in a double-byte character set (DBCS). To type characters on a DBCS version of Windows 95 or Windows NT, use an Input Method Editor (IME) set up to produce single-byte character set (SBCS) numbers. Examples of DBCS versions include, but are not limited to, Japanese and Hangeul. 
	At this time, Microsoft Dial-Up Networking 1.2 (and therefore PPTP functionality for Windows 95) is only available in English. Service profiles in other languages cannot include the Microsoft Dial-Up Networking 1.2 upgrade. 
	
	
	Known Issues with Connection Manager
	
	The IdleThreshold and IdleTimeout parameters are not supported by Connection Manager on Windows NT. Therefore, the "Disconnect if idle for more than" setting in Connection Manager may not work properly. 
	Connection Manager requires certain files that are supplied by Internet Explorer 3.0 or later. If you remove Internet Explorer, Connection Manager will no longer work. 
	Do not install two copies of Microsoft Connection Manager in two different folders on the same computer. This will cause the original service profiles to become disassociated with Connection Manager. To prevent this, install both versions into the same folder. 
	On Windows 95, if you try to establish a Dial-Up Networking connection with your ISP, you might see an error message in the Microsoft Connection Manager dialog box saying that you need to type a phone number. If this happens, click Settings. When the Location Information dialog box appears, follow the instructions, and then click OK. 
	On Windows NT, if you try to establish more than one connection, you might see the message, "The modem is not configured properly..." This sometimes happens if you try to dial too quickly, or if you start Microsoft Connection Manager when a connection has already been established using Dial-Up Networking. Disregard the message. Use one connection at a time. 
	On Windows NT, you might have problems with Remote Access Services (RAS), which is automatically installed by the Connection Manager service profile. Make sure RAS is configured to use a manual startup type, and that you have privileges to start RAS. To do this, 
	Click Start, point to Settings, then click Control Panel, and then double-click Services. 
	In the Services list, double-click Remote Access Service. 
	In the Service dialog box, click Manual, and then click OK. 
	On Windows NT, if you change the "Disconnect if idle for more than" setting, the change you made will not take effect until you quit Microsoft Connection Manager and then restart it. 
	If you type or edit the phone number in the Dialing tab of the Connection Settings dialog box, make sure you use the proper form for the phone number. If you do not, the Connection Manager will not use the Dialing Properties that you have set up when dialing the telephone number. 
	
	The proper form is as follows:
	+[country code] (area code) phone number 
	For example, if your country code is 1, your area code is 800, and your phone number is 555-1212, you should type the phone number as follows, making sure to include the '+' sign, spaces, and parentheses: 
	+1 (800) 5551212 
	If you do not use this form, make sure you enter the number exactly as it is to be dialed. 
	If you are using Microsoft Dial-Up Networking 1.2, and the following message appears, disregard it: 
	This DHCP client was unable to obtain an IP network address from a DHCP server. Do you want to see future DHCP messages? 
	Microsoft Connection Manager does not work on Windows NT 4.0 with some internal ISDN network adapters, including the Diamond Supra NetCommander ISDN Modem. 
	Connection Manager supports using single-channel ISDN. You can manually configure Connection Manager to to use dual-channel ISDN. 
	
	If you are running Windows 95, use the following steps to set up dual-channel ISDN: 
	Click Start, then point to Programs, then point to Accessories, and then click Dial-Up Networking. 
	Right-click the connection icon for your ISP and then click Properties. 
	Click the Multilink tab. 
	Click Use additional devices, and then click Add. 
	In the Edit Extra Device dialog box, select the device for your extra ISDN channel, and then type the phone number for that device. 
	
	If you want to use dual-channel for your backup connection icon, repeat the above steps for your backup connection icon. 
	
	Once you have used this technique to set up a dual-channel connection icon for use with Connection Manager, if you change either your primary or backup phone number, you will also have to edit the multilink phone number that you entered in step 5. 
	
	If you are running Windows NT, see your Windows NT documentation for information on setting up dual-channel ISDN connections. 
	Connection Manager will automatically install the TCP-IP protocol, but no other protocols. If you use a connection icon that requires a protocol other than TCP-IP, make sure you install it before attempting to connect to your ISP. To do this: 
	Click Start, point to Settings, click Control Panel, and then double-click Network. 
	Click the Services tab, click Remote Access Service, and then click Properties. 
	Click the modem or VPN adapter, and then click Network. 
	In the Dial out Protocol list, click the protocol that your service profile uses. 
	If you are running Windows NT and using Connection Manager to establish a Dial-up Networking connection, Connection Manager does not support popping up a terminal window after dialing. (Bringing up a terminal window before dialing, however, is supported.) If your ISP requires that your connection causes a terminal window to pop up after you connect, contact your ISP and ask for a dial-up script that will bring up the terminal window. 
	Windows 95 users may see problems in Connection Manager displays, resulting from the installation of a service profile that uses a different language than that configured for use by the operating system. 
	Numbers typed in a double-byte character set (DBCS) are not accepted. To type numbers on a DBCS version of Windows 95 or Windows NT, use an Input Method Editor (IME) set up to produce single-byte character set (SBCS) numbers. Examples of DBCS versions include, but are not limited to, Japanese and Hangeul. 
	For More Information
	
	For help in using the Connection Manager Administration Kit, read the Microsoft Connection Manager Administration Kit documentation. 
	
	Return to top
	
	--------------------------------------------------------------------------------
	
	Copyright Information
	(C) 1997 Microsoft Corporation
	
	These materials are provided "as-is," for informational purposes only.
	
	Neither Microsoft nor its suppliers makes any warranty, express or implied with respect to the content of these materials or the accuracy of any information contained herein, including, without limitation, the implied warranties of merchantability or fitness for a particular purpose. Because some states/jurisdictions do not allow exclusions of implied warranties, the above limitation may not apply to you.
	
	Neither Microsoft nor its suppliers shall have any liability for any damages whatsoever including consequential, incidental, direct, indirect, special, and lost profits. Because some states/jurisdictions do not allow exclusions of implied warranties, the above limitation may not apply to you. In any event, Microsoft's and its suppliers' entire liability in any manner arising out of these materials, whether by tort, contract, or otherwise shall not exceed the suggested retail price of these materials.
	
	--------------------------------------------------------------------------------
	
	(C) 1997 by Microsoft Corporation. All rights reserved.
	
	Additional query words: cmak NTOP iis kbreadme readme cmakread.htm cmakread akz
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNT400OptionPack
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
