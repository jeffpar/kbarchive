---
layout: page
title: "Q198796: IAS Cannot Authenticate to Windows NT Domain Using CHAP"
permalink: /kb/198/Q198796/
---

## Q198796: IAS Cannot Authenticate to Windows NT Domain Using CHAP

{% raw %}

	Article: Q198796
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are authenticated by a Windows NT domain using Microsoft Internet
	Authentication Service (IAS), you cannot be authenticated using Challenge
	Handshake Authentication Protocol (CHAP).
	
	CAUSE
	=====
	
	This behavior occurs because the CHAP specification requires passwords to be
	stored in "reversibly encrypted format" or in plain-text format.
	
	Computers running Windows NT Server store user information in a database called
	the Security Accounts Manager (SAM). The user passwords stored in the SAM cannot
	be compromised, even if the internal file structures are discovered. A user in a
	domain that uses CHAP creates a challenge response by combining the challenge
	sent by the Network Access Server (NAS) and the user's plain-text password.
	Windows NT domain controllers cannot reproduce the plain-text password from the
	value stored in the SAM database, and IAS cannot authenticate a CHAP request.
	
	For additional information, please refer to the following Request for Comments
	(RFC) document: RFC 1994, section 2.2. For information about obtaining RFC
	documents from the Internet, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, use the appropriate method:
	
	- Use Microsoft CHAP instead of CHAP.
	
	Microsoft CHAP is an updated version of CHAP. It does not require that passwords
	be stored in reversibly encrypted or plain text format. To use Microsoft CHAP,
	your NAS hardware manufacturer must support it and Microsoft CHAP must be
	configured on your hardware. If your current hardware does not support Microsoft
	CHAP, please check with your hardware manufacturer for a firmware update that
	adds support for Microsoft CHAP authentication. If you are using Windows NT with
	Routing and Remote Access Service (RRAS) as your NAS device, you can enable
	Microsoft CHAP support.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q219283 Using MS-CHAP with Radius Authentication
	
	You can also refer to the following RFC for further information:
	
	  http://www.ietf.cnri.reston.va.us/rfc/rfc2433.txt
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	- Use PAP or SPAP.
	
	Password Authentication Protocol (PAP) sends passwords in plain text between the
	remote client and the NAS computer. In most cases, this communication happens
	over a dial-up phone line. When the request reaches the NAS computer, the
	password is sent to the Microsoft Radius server using RSA-MD5 encryption.
	Although PAP is used by numerous Internet service providers, it is the least
	preferred method. Shiva Password Authentication Protocol (SPAP), CHAP, or
	Microsoft CHAP is preferred for security reasons. If you are using Windows NT
	with RRAS as your NAS device, you can enable PAP support.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172216 How to Force Routing and Remote Access to Use PAP
	
	SPAP is a Shiva proprietary standard but it can be used on other NAS hardware.
	SPAP is preferable to PAP, but it is not as secure as Microsoft CHAP.
	
	- Apply the CHAP fix to all Windows NT 4.0 domain controllers.
	
	Microsoft has a fix for Windows NT 4.0 domain controllers to support CHAP. Before
	you install CHAP support on any domain controller, create an Emergency Repair
	Disk (ERD) for the domain controller. You can use the ERD to recover the server
	in the event of a problem with the CHAP support software.
	
	NOTE: You must install this software on both primary and backup domain
	controllers so that authentication still operates even if the primary domain
	controller is offline for any reason.
	
	To apply the IAS security fix on domain controllers:
	
	  1. Install the fix using the Iaspack.exe tool included with the fix.
	
	  2. Run Regedt32.
	
	  3. On the Window menu, click "HKEY_LOCAL_MACHINE on Local Machine".
	
	  4. Find the System\CurrentControlSet\Control\Lsa\MD5-CHAP key, and then
	     double-click the Store Clear Text Passwords value.
	
	  5. In the DWORD Editor dialog box, change the data value from 0 to 1. Click
	     OK. Note that the REG_DWORD value is displayed as 0x1.
	
	  6. Quit Registry Editor.
	
	  7. Restart the domain controller.
	
	Important Note About Windows NT and CHAP Support
	------------------------------------------------
	
	The following limitations are inherent when you implement CHAP on a server. Most
	occur because CHAP traps password changes to store them in the SAM.
	
	- CHAP authentication does not go into effect until the domain controller is
	  upgraded and users have changed their password. Users must change their
	  password to store the reversibly encrypted passwords in the SAM database. If
	  you are currently using a Beta version of the Microsoft CHAP software, users
	  with a reversibly encrypted password do not have to change their password
	  with this fix.
	
	- Domain controllers that have CHAP support require about 100 bytes more RAM
	  per user in the database.
	
	- Because of the decrease in performance involved and additional steps required
	  to configure this fix, Microsoft recommends using one of the other protocols
	  mentioned above.
	
	  For additional information about how to get this fix from Microsoft Product
	  Support Services, click the article number below to view the article in the
	  Microsoft Knowledge Base:
	
	  Q197506 IAS Incorrectly Validates User Accounts
	
	  NOTE: SP6 is NOT required to install this fix; it may be installed on a
	  computer running Windows NT 4.0 SP4, SP5, or SP6. This fix should be applied
	  after you install or reinstall any service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: MS-CHAP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
