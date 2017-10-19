---
layout: page
title: "Q249780: XCLN: Outlook Security Features Installed with Office 2000 SR-1"
permalink: /kb/249/Q249780/
---

## Q249780: XCLN: Outlook Security Features Installed with Office 2000 SR-1

	Article: Q249780
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Outlook 2000 Service Release 1 (SR-1) contains key advances in
	messaging security via support for Secure/Multipurpose Internet Mail Extensions
	version 3 (S/MIME v3).
	S/MIME v3 is an Internet Engineering Task Force (IETF) Internet standard which
	extends the capabilities of S/MIME v2, most of which was implemented in
	Microsoft Outlook Express and Outlook 98.
	
	The new Cryptographic Message Syntax standard, S/MIME v3 and S/MIME v3 Extended
	Security Services (ESS), taken together, allow S/MIME to provide greatly
	enhanced capabilities.
	
	MORE INFORMATION
	================
	
	Some of the key features of Outlook 2000 SR-1 for advanced security are:
	
	- Support for the Diffie-Hellman Key Agreement for encryption
	
	- DSS for Digital Signature - an SHA hashing algorithm that generates a 160-bit
	  hash value.
	
	- Signed (Secure) receipts
	
	- Security labels
	
	- A new Certificate User Interface
	
	- The ability to publish your S/MIME certificates to the Global Address List
	
	- Multiple layers of encryption and signatures
	
	- Multiple digital signatures per layer
	
	Several new Outlook 2000 features are implemented, as well. These features are:
	
	- LDAP support in-the-box for accessing certificates
	
	- Cryptographic auto configuration to assist in setting up a security profile
	
	- Contact security properties to control encryption to external addresses
	
	- Ability to share contact entries which contain certificates
	
	- Addition of "Signed By" to Read Note form
	
	NOTE: The enhanced encryption and security features of this release require
	Microsoft Windows 2000.
	
	IMPORTANT: Outlook continues to work with Internet Explorer 4.x and Internet
	Explorer 5 without these new encryption and security features. There is no need
	to upgrade to a new operating system or a new version of Exchange Server unless
	you need these new features. (Note that the new security and encryption features
	are disabled but visible if Outlook 2000 SR-1 is installed without upgrading the
	operating system to Windows 2000.)
	
	The advanced security features of Outlook 2000 SR-1 are enabled by the addition
	of a registry key. To enable these new features:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following subkey in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Office\9.0\Outlook
	
	3. On the Edit menu, click New, and then click Key.
	
	4. Type "Security" (without the quotation marks) to name the new subkey, and
	  then select this new subkey.
	
	5. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: EnableSRFeatures Data Type: REG_DWORD Value: 1
	
	6. Quit Registry Editor.
	
	If the EnableSRFeatures value is set to 0, the new security features are not
	enabled or visible to users.
	
	Additional information about enhanced security features in Outlook 2000 SR-1 can
	be found in the New Encryption and Security Features in Microsoft Outlook 2000
	SR-1 white paper. This white paper also documents additional registry settings
	that allow you to customize security. You can download the white paper from the
	following location:
	
	  http://www.microsoft.com/office/ork/2000/appndx/toolbox.htm#o2sr1wp
	
	For additional information about how to obtain SR-1, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q245025 OFF2000:How to Obtain and Install Microsoft Office 2000 Service
	  Release 1 (SR-1)
	
	REFERENCES
	==========
	
	The Internet Engineering Task Force
	-----------------------------------
	
	RFC 2312: S/MIME Version 2 Certificate Handling
	
	RFC 2311: S/MIME Version 2 Message Specification
	
	RFC2632: S/MIME Version 3 Certificate Handling
	
	RFC2633: S/MIME Version 3 Message Specification
	
	RFC2634: Enhanced Security Services for S/MIME
	
	RSA Labs
	--------
	
	RSA Labs FAQ
	
	White Paper
	-----------
	
	The white paper entitled "Microsoft Outlook 2000 Service Release 1," contains all
	of the Outlook 2000 SR-1 security registry settings. It is available on the
	following Web site:
	
	  http://www.microsoft.com/office/ork/2000/appndx/toolbox.htm
	
	Additional query words: OL2K
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbbug
	
	=============================================================================
	
