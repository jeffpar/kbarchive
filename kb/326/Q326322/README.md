---
layout: page
title: "Q326322: MS02-037: Rspns to SMTP Client EHLO Cmmd Causes Buffer Overrun"
permalink: /kb/326/Q326322/
---

## Q326322: MS02-037: Rspns to SMTP Client EHLO Cmmd Causes Buffer Overrun

{% raw %}

	Article: Q326322
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbSecurity kbExchange550preSP5fix KbSECVulnerability KbSECBulletin KbSECHack
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Exchange Server uses the Internet Mail Service to communicate with other mail
	servers by means of Simple Mail Transfer Protocol (SMTP). When the Internet Mail
	Service receives an SMTP extended Hello (EHLO) protocol command from a
	connecting SMTP server, the Internet Mail Service responds by sending a status
	reply that starts with the following line:
	
	  250-<Exchange_Server_ID>Hello<connecting_server_ID>
	
	In that line:
	
	- <Exchange_Server_ID> is the fully qualified domain name (FQDN) of the
	  Exchange Server computer.
	
	- <connecting_server_ID> is either the FQDN of the server that initiated
	  the connection, or the IP address of the server that initiated the
	  connection. The FQDN is used if the Exchange Server 5.5 Internet Mail Service
	  can resolve this information by doing a reverse Domain Name System (DNS)
	  lookup. The IP address is used if a reverse DNS lookup is not possible or
	  does not resolve the connecting server's IP address.
	
	A security vulnerability results because of an unchecked buffer in the Internet
	Mail Service code that generates the response to the EHLO protocol command. If
	the total length of the message exceeds a particular value, the data overruns
	the buffer. If the buffer is overrun with random data, the Internet Mail Service
	stops responding. However, if the buffer is overrun with carefully chosen data,
	an attacker may be able to run code in the security context of the Internet Mail
	Service, which runs as the Exchange Server 5.5 service account.
	
	IMPORTANT: Note that the attacker cannot simply send data to the Internet Mail
	Service to overrun the buffer. Instead, the attacker has to create a set of
	conditions that cause the Internet Mail Service to overrun its own buffer when
	it generates the EHLO response. Specifically, the attacker has to ensure that a
	reverse DNS lookup not only succeeds, but provides an FQDN with a length that is
	sufficient to cause the buffer overrun.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that you determine are at risk of attack. Evaluate your computer's physical
	accessibility, network and Internet connectivity, and other factors to determine
	the degree of risk to your computer. See the associated Microsoft Security
	Bulletin (http://www.microsoft.com/technet/security/bulletin/ms02-037.asp) to
	help determine the degree of risk. This fix may receive additional testing. If
	your computer is sufficiently at risk, Microsoft recommends that you apply this
	fix now.
	
	To resolve this problem immediately, download the fix by clicking the download
	link later in this article or contact Microsoft Product Support Services to
	obtain the fix. For a complete list of Microsoft Product Support Services phone
	numbers and information about support costs, please visit the following
	Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	Download Information
	--------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload the Q326322 package now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=40666)
	
	Release Date: July 24, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Installation Information
	------------------------
	
	This update supports the following switches:
	
	- /x Generates a list of the packaged files. You can select the files that you
	  want to extract and the location.
	
	- /s Performs a silent installation. This switch stops services and installs
	  the fix with no prompts or user interface (UI). Allow sufficient time for the
	  fix to be installed, because this switch returns control to the command
	  prompt well before the installation is finished. Make sure that the fix is
	  installed. The graphical user interface (GUI) fix package Q<xxxxxx>.exe
	  should be running in the task manager properties (where <xxxxxx> is the
	  Microsoft Knowledge Base article Q number and name of the fix).
	
	- /z This switch is the same as the /x switch, but the /z switch automatically
	  restarts the computer. Do not use the /z switch unless you want to
	  automatically restart the computer.
	
	- /m Prompts you for the folder locations. You can select the folder locations
	  of the Microsoft Windows folder, the System folder, the System32 folder, the
	  Temp folder, the Source folder (which is usually the Temp folder), the System
	  Windows folder, and the Language folder.
	
	For example, the following command line installs the update without any user
	intervention and then does not force the computer to restart:
	
	  Q326322enui386 /s
	
	File Information:
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date          Time    Version       Size      File name and path
	  --------------------------------------------------------------------------
	  12-JUL-2002   12:58   5.5.2656.59   209,680   %EXSRVROOT%\Bin\Imcmsg.dll
	  12-JUL-2002   12:59   5.5.2656.59   503,568   %EXSRVROOT%\Bin\Msexcimc.exe
	
	NOTE: Because of file dependencies, this update may contain additional files.
	This update requires Exchange Server 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in the Microsoft products that are listed at the beginning of this
	article.
	
	MORE INFORMATION
	================
	
	For additional information about this vulnerability, visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms02-037.asp
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbSecurity kbExchange550preSP5fix KbSECVulnerability KbSECBulletin KbSECHack 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
