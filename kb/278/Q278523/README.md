---
layout: page
title: "Q278523: XADM: Exchange 2000 Setup Fails and Security Vulnerability"
permalink: /kb/278/Q278523/
---

## Q278523: XADM: Exchange 2000 Setup Fails and Security Vulnerability

{% raw %}

	Article: Q278523
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbgraphxlinkcritical kbExchange2000SP1Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange 2000 Enterprise Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Microsoft Exchange 2000 Server or Exchange 2000 Enterprise
	Server (hereafter referred to collectively as Exchange 2000), a special account
	is created that was previously used to facilitate the processing of event
	synchronization scripts. The account name is EUSER_EXSTOREEVENT, and the
	password is set to a simple hard-coded password. If you attempt to deploy
	Exchange 2000 in environments with complex password requirements, you may
	experience failures during Setup, and you may receive the following error
	message:
	
	  [14:22:18] bad member index -1 CAtomBaseMDB::ScCreateStoreEventAccount
	  (K:\admin\src\udog\exsetdata\components\server\a_basemdb.cxx:290) Error code
	  0XC00703E5 (997): Overlapped I/O operation is in progress.
	
	CAUSE
	=====
	
	
	The Setup failure is caused because the hard-coded password does not meet the
	password complexity requirements in some environments. You will experience this
	failure when you attempt to install an affected version of Exchange 2000 (see
	the "Status" section for version details) on a domain controller or member
	server with a strong password policy enabled.
	
	RESOLUTION
	==========
	
	Before You Run Setup
	--------------------
	
	To minimize the security risk that this account represents, manually create an
	account that uses the same name, EUSER_EXSTOREEVENT, before you run Setup, and
	give the account a password that meets the password complexity requirements of
	your company. During installation, Setup will detect that this account already
	exists and will not attempt to create it or change the password.
	
	When You Install Exchange 2000 on a Member Server:
	
	Create the account as a disabled local user account. The following steps outline
	how to create an account in the local account database:
	
	1. Start the Computer Management MMC snap-in by clicking Start, pointing to
	  Programs, pointing to Administrative Tools, and then clicking Computer
	  Management on the member server that Exchange 2000 will be installed on.
	
	2. Expand the Local Users and Groups container, and then click the Users
	  container.
	
	3. On the Action menu, click New User.
	
	4. In the New User dialog box, fill in the following information:
	
	  Username: EUSER_EXSTOREEVENT
	  Password: < A password that meets you company's complexity policy>
	
	5. Click to select the "Account is disabled" check box, and then click Create.
	
	When You Install Exchange 2000 on a Domain Controller:
	
	Create the EUSER_EXSTOREEVENT account in Active Directory, and then disable the
	account. The following steps outline how to create an account in Active
	Directory:
	
	1. Start the Active Directory Users and Computers MMC snap-in by clicking Start,
	  pointing to Programs, pointing to Administrative Tools, and then clicking
	  Active Directory User and Computers on the domain controller for the domain
	  in which Exchange 2000 will be installed.
	
	2. Click the Users container.
	
	3. On the Action menu, click New, and then click User.
	
	4. In the New User dialog box, fill in the following information:
	
	  Full Name: EUSER_EXSTOREEVENT
	  User Logon Name: EUSER_EXSTOREEVENT
	
	5. Click Next.
	
	6. Provide a password that meets your company's password complexity policy, and
	  then confirm it.
	
	7. Click to select the "Account is disabled" check box.
	
	8. Click Next, and then click Finish to create the specified account.
	
	After Setup
	-----------
	
	Manual Procedure:
	
	After you complete Exchange 2000 Setup, Microsoft recommends that you delete this
	account to minimize the potential security risk that the well-known account
	represents. If you are using this account for other reasons, at a minimum, reset
	the account password to ensure the security of this account.
	
	Tool to Automate Procedure:
	
	As an alternative to the manual process described above, you can obtain the
	following tool from the following link to automatically correct this security
	vulnerability: The following file is available for download from the Microsoft
	Download Center:
	
	  DownloadDownload Q278523engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25866)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	- This tool requires the currently logged-on user to have either Administrator
	  privileges to the local computer for member servers, or Domain Administrator
	  privileges for domain controllers. This tool extracts itself into the C:\Temp
	  folder. After it has been extracted, follow the directions outlined after the
	  extraction is complete.
	
	- For member servers: This tool searches the local account database, and
	  deletes the account in question. Microsoft recommends that you run the
	  utility from each member server on which Exchange 2000 has been installed.
	
	- For a domain controller with Exchange 2000 installed: Run this utility on a
	  domain controller. It deletes the account from Active Directory. In
	  environments with multiple domain controllers, this account may continue to
	  exist on other domain controllers until Active Directory replication has
	  completed.
	
	IMPORTANT: This tool only deletes the account in question. It does not prevent
	the original setup error from occurring. You must still follow the manual
	process of creating, and then disabling the account before you run Setup to
	avoid the setup error. After Setup is complete, you can manually delete this
	account or remove it using the tool provided.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Exchange 2000. This problem
	was first corrected in Microsoft Exchange 2000 Server Service Pack 1.
	
	The following Exchange 2000 installation media are affected by this
	vulnerability:
	
	- Exchange 2000 Server CDs without "Rev A" printed on the CD on the line below
	  the Part No. (see upper right quadrant)
	
	- Exchange 2000 Enterprise Server CDs without "Rev A" printed on the CD below
	  the Part No. (see upper right quadrant)
	
	- Exchange 2000 Server and Exchange 2000 Enterprise Server included with the
	  October 2000 Select CD shipment
	
	For the Exchange 2000 evaluation edition, and as another method to test for this
	vulnerability, please use the Filever.exe tool, available with Exchange 2000, to
	check the version of Exsetdata.dll. If the version is equal to 6.0.4417.5, you
	are affected by the vulnerability.
	
	Example of Filever.exe usage:
	
	  <CD drive>\Support\Utils\I386>filever \setup\i386\exsetdata.dll
	
	If the resulting output contains the following version number (in bold below),
	you are affected by this vulnerability:
	
	  -r--- W321<A0><A0><A0>DLL ENU<A0><A0><A0><A0><A0>6.0.4417.5 shp<A0><A0><A0>2,507,024 08-16-2000 exsetdata.dll
	
	In addition, Exchange 2000 Service Pack 1 includes an additional check for this
	account and if detected, it will delete the account.
	
	
	MORE INFORMATION
	================
	
	This account represents a security vulnerability if you deploy Exchange 2000
	because the account name is well known. In the released version of Exchange
	2000, this account is no longer necessary to process event scripts, and should
	be deleted after Setup is completed.
	
	You can find the Frequently Asked Questions (FAQ) regarding this vulnerability
	and the patch at the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/fq00-088.asp
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg kbgraphxlinkcritical kbExchange2000SP1Fix 
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv kbExchange2000EntServ
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
