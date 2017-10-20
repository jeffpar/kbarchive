---
layout: page
title: "Q215462: WD97: Template Security Patch Installation Issues"
permalink: /kb/215/Q215462/
---

## Q215462: WD97: Template Security Patch Installation Issues

{% raw %}

	Article: Q215462
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbtemplate word8 word97
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: The Word 97 Template Security Patch will be installed but will not function correctly if you have Microsoft Windows 2000 installed on your system. Please see the "Patch Does Not Function with Microsoft Windows 2000 Installed" section of this article for more information.
	
	SUMMARY
	=======
	
	This article contains important information about the Word Template Security
	Patch. The following topics are covered in this article:
	
	- Security Issue
	
	- Installation Considerations
	
	- How to Determine Whether Word SR-1 or SR-2 Is Installed on Your System
	
	- How the Security Patch Can Be Applied to an Administrative Network
	  Installation
	
	- How to Determine Whether Word SR-1 or SR-2 Was Patched
	
	- How to "Silently" Install the Patch (Without User Prompts)
	
	- Troubleshooting Patch Errors
	
	The Word Template Security Patch is available from the following Microsoft Web
	site:
	
	  http://office.microsoft.com/downloads/9798/wd97sp.aspx
	
	NOTE: The Template Security Patch utility can be applied to Microsoft Word 97
	Service Release 1 (SR-1) and Microsoft Word 97 Service Release 2 (SR-2) in the
	following languages:
	
	  Brazil
	  Chinese, simplified
	  Chinese, traditional
	  Czech Intl.
	  Danish
	  Dutch
	  English US
	  English, Swedish
	  English, UK
	  Finnish
	  French, Canadian
	  French, Norway
	  German
	  Greek
	  Hungarian
	  Iberian Spanish
	  Italian
	  Japan 97
	  Japan 98
	  Korean
	  Polish
	  Russian
	  Slovenia
	  Turkish
	
	MORE INFORMATION
	================
	
	The Security Issue
	------------------
	
	A document file can potentially be attached to a nontrusted template that
	contains macros. Microsoft Word considers documents and templates that are
	stored in either the user templates folder or the workgroup templates folder as
	trusted, or free of unwanted macro viruses. To determine where Word is storing
	your trusted user and workgroup templates, click Options on the Tools menu, and
	then click the File Locations tab.
	
	Microsoft provides a Word Template Security Patch to protect your documents from
	macro viruses that could potentially be spread from a nontrusted template.
	
	With the Template Security Patch applied, Word warns you with the following
	warning when the document that you are opening is attached to a nontrusted
	template that contains macros:
	
	  The document you are opening contains macros or customizations. Some macros
	  may contain viruses that could harm your computer.
	
	  If you are sure this document is from a trusted source, click Enable Macros.
	  If you are not sure and want to prevent any macros from running, click
	  Disable Macros.
	
	Installation Considerations
	---------------------------
	
	You can only apply the Word Template Security Patch utility to Microsoft Word 97
	(SR-1) and (SR-2). You must first patch the original, or base, Microsoft Office
	or Word 97 installations with SR-1 before you can apply the Template Security
	Patch.
	
	NOTE: This patch modifies the Microsoft Word executable file. Reinstalling
	Microsoft Office 97 or updating SR-1 to SR-2 requires that the Template Security
	Patch be applied to your system again.
	
	
	How to Determine Whether Word SR-1 or SR-2 Is Installed on Your System
	----------------------------------------------------------------------
	
	You can check your version of Word in the About dialog box. To check Microsoft
	Word, follow these steps:
	
	1. Open Microsoft Word 97.
	
	2. On the Help menu, click About Microsoft Word.
	
	3. Determine whether the dialog box contains the following text:
	
	   - Microsoft Word 97 SR-1
	
	     -or-
	
	   - Microsoft Word 97 SR-2
	
	
	How the Security Patch Can Be Applied to an Administrative Network Installation
	-------------------------------------------------------------------------------
	
	The Word Template Security Patch can be applied to an administrative "run from
	network server" installation of Word, provided that you have the permissions to
	write to the network folder where the Word executable resides. To patch a "run
	from network server" installation, follow these steps:
	
	1. Log on as an administrator (or as any user with Write access to the
	  installation folder) on a workstation that runs Word from the server.
	
	2. Close any open sessions to the Microsoft Word executable.
	
	3. Run the Template Security Patch.
	
	After the patch is complete, users at other workstations are protected from macro
	viruses that can be spread from a nontrusted template the next time that they
	start Word.
	
	How to Determine Whether Word SR-1 or SR-2 Was Patched
	------------------------------------------------------
	
	You can verify that your Word executable has been successfully patched by running
	the Wd97SP.exe program. The utility can determine whether your Word program was
	previously patched and notifies you with the following message:
	
	  Microsoft Word has already been patched.
	
	How to "Silently" Install the Patch (Without User Prompts)
	----------------------------------------------------------
	
	You can apply the Security Patch silently to Word 97 installations by running it
	with command-line switches.
	
	To extract the patch executable, type the following command:
	
	  "wd97sp.exe /q /c:"Wdpatch.exe -s"" (without the quotation marks)
	
	Winword.exe is then patched in silent mode, with no user prompts.
	
	Troubleshooting Patch Errors
	----------------------------
	
	When you run the Template Security Patch, it checks the Windows registry for the
	location of the Word executable file and then performs a test to make sure that
	you actually have Microsoft Word 97 SR-1 or SR-2 installed on your computer.
	
	Specifically, the patch is not successful if the following key in the Microsoft
	Windows registry refers to an incorrect location for Microsoft Word 97:
	
	  HKEY_CLASSES_ROOT\CLSID\{000209FF-0000-0000-C000-000000000046}\LocalServer32
	
	Run Setup with the /y Switch to Correct the Registry:
	
	Try to run Setup with the /y switch for Word or Office to repair registry
	corruption.
	
	To run Setup with the /y switch, follow these steps:
	
	1. Insert the Word or Office CD into the CD-ROM drive. If you installed Word or
	  Office from floppy disks, insert the Setup Disk 1 in the floppy disk drive.
	
	2. Click Start and then click Run.
	
	3. In the Open box, type the following
	
	  "<drive>:\setup /Y" (without the quotation marks)
	
	  where <drive> is the letter of the drive that contains the CD or Setup
	  Disk 1.
	
	4. Click OK.
	
	5. Click Reinstall.
	
	This reregisters Word and all Office programs when you run Office Setup.
	
	Turn Off Virus Protection Before Running the Patch:
	
	Some virus protection programs can interfere with the Template Security Patch. If
	you use a virus protection program on your computer, turn off the virus
	protection program before you run the patch. (You can turn on the virus
	protection program again after the patch is complete.)
	
	Error Message: "Cannot Open Word Executable":
	
	If you attempt to run the patch, the following error message may appear:
	
	  Cannot open Word executable.
	
	  It may be read-only or on a drive to which you do not have write access.
	
	When you click OK, the following error message appears:
	
	  Patch has failed.
	
	This problem may occur in one of the following cases:
	
	Case 1
	
	If you run Word 97 and Word 2000 or later on the same computer, the path for the
	version of Word that you ran last will be in the registry key. If you last ran a
	version of Word later than Word 97, the patch will fail, because the patch is
	not designed for versions of Word later than Word 97.
	
	To correct this problem, run Word 97 before you run the security patch, or
	manually change the following registry key to the correct path:
	
	  HKEY_CLASSES_ROOT\CLSID\{000209FF-0000-0000-C000-000000000046}\LocalServer32
	
	Case 2
	
	The Word 6.0/95 Export converter is not installed. To correct this problem,
	install the Word 6.0/95 Export converter before you try to run the Word 97
	Template Security Patch.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q177797 WD97: Word 6.0/95 Not in "Save As Type" in Save As Dialog Box
	
	Patch Does Not Function with Microsoft Windows 2000 Installed:
	
	If you have Microsoft Windows 2000 and Microsoft Word 97 for Windows installed,
	even in a dual boot environment between Microsoft Windows 95 or Microsoft
	Windows 98 and Windows 2000, the Word 97 Security Template Patch will be
	installed but will not function correctly. Macros in an attached template in a
	nontrusted location may still be activated, and no macro warning message appears
	when you open a Word document.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q214652 WD97: No Macro Warning Opening File Attached to Template
	
	Microsoft Support Options
	-------------------------
	
	If you cannot resolve this issue, several support options are available to assist
	you.
	
	Quickly Find Answers Yourself Online:
	
	Use Microsoft Online Support to search the Microsoft Knowledge Base and other
	technical resources for fast, accurate answers. You can also customize the site
	to control your search.
	
	To begin your search, browse to the following Web site:
	
	  http://www.microsoft.com/support/
	
	Microsoft Product Support:
	
	Contact a Microsoft Product Support professional to assist you with
	troubleshooting problems.
	
	For more information about obtaining help with troubleshooting Microsoft Windows,
	click Help Topics on the Help menu in Windows Explorer. On the Contents tab,
	double-click to open the Troubleshooting book. Then double-click to open the
	Contact Microsoft Technical Support book to view your support options.
	
	For more information about obtaining help with troubleshooting Microsoft Word,
	click About Microsoft Word on the Help menu, and then click Tech Support.
	
	For additional information about Microsoft support services, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q102344 Microsoft Product Support Options Q&A
	
	Microsoft Solution Providers:
	
	Microsoft Solution Providers are independent organizations that have teamed with
	Microsoft to use technology to solve business problems for companies of all
	sizes and industries.
	
	To locate a Microsoft Solution Provider in your area in the U.S. and Canada, call
	the Microsoft Sales Information Center at (800) 426-9400. If you are outside the
	United States, contact your local subsidiary. To locate your subsidiary, see the
	Microsoft World Wide Offices Web site at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	Additional query words: security html email
	
	======================================================================
	Keywords          : kbdta kbtemplate word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
