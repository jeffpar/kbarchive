---
layout: page
title: "Q224436: OL98: Melissa Macro Virus Alert"
permalink: /kb/224/Q224436/
---

## Q224436: OL98: Melissa Macro Virus Alert

	Article: Q224436
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Word 97 for Windows 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	The Melissa Word macro virus has the ability to spread rapidly and, under some
	circumstances, to send sensitive documents outside of the organization. If the
	volume of generated mail is large enough, the Melissa virus can create a mail
	storm that can seriously affect your business systems.
	
	MORE INFORMATION
	================
	
	What Is It and What Does It Do?
	-------------------------------
	
	If an anti-virus solution is not in place when a user opens an infected Word
	document using Microsoft Word, and the user then enables macros, the Melissa
	macro starts and performs several unwanted actions on the user's computer:
	
	- It lowers macro security settings.
	
	- Adds its own registry setting.
	
	- Infects the Word Normal.dot template file.
	
	- If able, sends e-mail message copies of itself to the first 50 entries of
	  every MAPI address book the user has configured.
	
	Originally, the virus was spread in a file attachment called List.doc, which
	contained references to pornographic Web sites. However, the users may see their
	own documents going out as attachments because the infection can also be passed
	on through an infected Normal.dot template.
	
	E-mail is not required to spread the virus, although e-mail accounts for the
	largest percentage of the spread. Simply sharing an infected Word document is
	enough.
	
	It is important to note that opening an e-mail message containing a document with
	the virus does not start the virus. The virus is started when the user opens the
	Word document and chooses to enable macros.
	
	For more specific details, see your antivirus vendor's Web site.
	
	Combating the Virus
	-------------------
	
	Alert and Educate Your Users:
	
	- Let your users know through whatever methods work best for your company that
	  they should delete any messages with a subject line of "Important Message
	  From <username>" where "<username>" is a variable based on who
	  the virus's last victim was.
	
	- If you open a mail message with the "Important Message From <username>"
	  or any other subject and find an attachment and text saying "Here is that
	  document you asked for ... don't show anyone else ;-)" you should NOT open
	  the attachment, but delete the message immediately.
	
	- Let your users know how to set up rules in their clients to automatically
	  delete any incoming mail containing an attachment and "Important Message
	  From" in the subject line.
	
	- Tell your users how to verify the virus definition level of whatever
	  anti-virus software they are running at the desktop. Clearly communicate
	  where and how to get updates that handle the Melissa virus.
	
	Isolate and Clean Up:
	
	Shut down gateways and message transfer agents (MTA) to other sites or
	organizations until you can clean up possible infection within your organization
	or site, and be sure measures are put in place to intercept any future infected
	mail from passing through your systems.
	
	Desktop Strategies:
	
	- Make sure that every desktop in your organization is running anti-virus
	  software and has an updated virus definition that contains fixes for the
	  Melissa virus. This will have the greatest impact of any step you can take as
	  it prevents any further spread whether by e-mail or simple file transfer.
	  Most anti-virus vendors posted updates within a half day of the first
	  reported Melissa infection.
	
	- Educate your users to disable all macros unless they must run a macro to get
	  their work done.
	
	For more details, please see the following address:
	
	  http://office.microsoft.com/assistance/9798/macroalert.aspx
	
	For more details on how macros work and how they can be controlled in the
	Microsoft Office environment, please see the following Microsoft Knowledge Base
	article:
	
	  Q224567 WD97: Word Macro Virus Alert "Melissa Macro Virus"
	
	Server Strategies:
	
	- Because the virus sends mail to the first 50 users in each address book, 50
	  temporary null address book entries should be added to the top of the global
	  address list and all other address containers that could be used for name
	  resolution.
	
	- All SMTP or other entry points to your messaging system should scan all
	  inbound and outbound documents and attachments. If you have not yet
	  implemented a solution at this level, you should temporarily drop your
	  connections to prevent spreading the virus until a solution can be put into
	  place.
	
	Cleaning Up Melissa at the Exchange Server Computers
	----------------------------------------------------
	
	Microsoft Product Support Services provides tools and procedures on the issues
	listed below. Please note that they are not long-term solutions but have been
	provided by Microsoft in the short term to provide temporary relief to systems
	until more long-term solutions can be developed and implemented. These solutions
	and tools are provided "as is" without warranty of any kind. Microsoft strongly
	recommends that you fully back up any system before performing these
	operations.
	
	To obtain these tools, contact Microsoft Product Support Services. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	- Removing Melissa from Information Stores: Remove mail messages that contain
	  attachments and a customized subject line from an Exchange Server information
	  store by using either the utility Isscan (a variation of Isinteg), or the
	  utility ExMerge, or both.
	
	- Removing Melissa from MTA Databases: Remove any Melissa mail that is
	  currently in the MTA database if your Exchange Server MTAs are experiencing
	  significant backlogs because of a mail storm caused by the Melissa virus.
	
	- Removing E-mail from Internet Mail Connectors: Pull Melissa e-mail messages
	  out of various queues within your Internet Mail Connectors. Note that
	  Microsoft recommends that you consider a longer term solution as described
	  later in the article.
	
	- Intercepting Melissa Mail at Gateways: To prevent further spread of the
	  Melissa virus, both internally and externally, you should implement some form
	  of protection on all your mail gateways.
	
	  The Computer Emergency Response Team (CERT) (http://www.cert.org/advisories/)
	  has posted sendmail and other solutions. In addition, you should consult your
	  anti-virus vendor. Be sure any virus package you run against an Exchange
	  Server computer is specifically Exchange Server-aware. Programs or versions
	  that are not Exchange Server-aware have been linked to data corruption and
	  performance issues on Exchange Server computers.
	
	Cleaning up Melissa at the Desktop
	----------------------------------
	
	Your users can use the Microsoft Client Side Scanning Software version 1.0 to set
	or reset macro warnings, modify Normal.dot if needed, and scan their local .pst
	files.
	
	The utility is used only for scanning and detection purposes for the specific
	Melissa virus characteristics. Individual users must run it as the utility
	relies on a user messaging profile to access client-side mail stores.
	
	IMPORTANT: This software inspects your client-side mail stores for the
	characteristics of the Melissa virus. When run, it sets the registry settings
	for macro warning to True. It does not delete, destroy, mark, or otherwise
	attempt to identify or alter individual objects in your personal mail store.
	This utility either alerts the user to the possible presence of a virus or
	provides a measure of confidence that the client mail stores do not contain
	attachments with the characteristics of the Melissa virus.
	
	This is not a virus scanning utility. There is still a possibility that a virus
	matching the characteristics of Melissa may not be discovered. Microsoft
	encourages you to implement or update a commercially tested anti-virus desktop
	solution.
	
	For additional information about anti-virus software, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	REFERENCES
	==========
	
	For more information on this and other viruses, contact one or more of these
	resources.
	
	CERT - Computer Emergency Response Team
	
	  http://www.cert.org/advisories/CA-99-04-Melissa-Macro-Virus.html
	
	NIPC - National Infrastructure Protection Center, and the FBI
	
	  http://www.nipc.gov
	
	CIAC - Computer Incident Advisory Capability
	
	  http://www.ciac.org/ciac/bulletins/j-037.shtml
	
	Additional query words: infected disinfect protect protected infect prank w97m melissa.a 98 OL2000
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
