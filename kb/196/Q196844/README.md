---
layout: page
title: "Q196844: WD97: &quot;Merge to Electronic Fax&quot; Unavailable with Winfax Pro"
permalink: /kb/196/Q196844/
---

## Q196844: WD97: &quot;Merge to Electronic Fax&quot; Unavailable with Winfax Pro

{% raw %}

	Article: Q196844
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	In a Word for Windows mail merge operation, the Merge To Electronic Fax option
	is unavailable when you are using WinFax Pro. (To locate the Merge To:
	Electronic Fax option, open a mail merge main document, click Mail Merge on the
	Tools menu, and then click the Merge button.)
	
	CAUSE
	=====
	
	WinFax Pro versions 3.0 and 4.0 are not compatible with the Messaging
	Application Programming Interface (MAPI) or Vendor-Independent Messaging (VIM)
	standards. Word requires MAPI or VIM compliance to perform a mail merge
	operation to an electronic fax. As a result, if your electronic fax software is
	not MAPI or VIM compliant, Word removes the Electronic Fax list item from the
	Merge To list.
	
	With WinFax Pro, you can fax to only one phone number at a time. To perform a
	mail merge to an electronic fax machine from Word, your fax software must be
	able to fax to multiple phone numbers in the same operation.
	
	
	WORKAROUND
	==========
	
	Method 1: Use a macro to fax
	----------------------------
	
	Create a macro that merges and faxes one record at a time.
	
	NOTE: You cannot work around this problem by merging your document to the
	printer, because Word sends all the merged documents to a single fax number.
	
	Method 2: Use Microsoft Fax
	---------------------------
	
	Microsoft Windows 95:
	
	  Install Microsoft Fax.
	
	Microsoft Windows for Workgroups 3.11:
	
	  Use Microsoft At Work PC Fax instead to merge your Word document to
	  electronic fax.
	
	  NOTE: If you have installed WinFax Pro 4.0 on Windows for Workgroups 3.11,
	  WinFax Setup will disable Microsoft At Work PC Fax. For more information on
	  what WinFax Setup does, see the additional notes in the WinFax Readme.doc.
	
	Method 3: Use the WinFax Pro macro to merge to fax
	--------------------------------------------------
	
	WinFax Pro 3.0 contains a Word for Windows macro that allows you to merge to the
	fax driver. The macro is described in the Ddemerg.doc file. The macro can be
	found in Winfax.dot. This macro may be incompatible with Microsoft Word 97.
	Contact Delrina for information about an updated macro.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	For more information about WinFax Pro, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q116376 Delrina WinFax Pro 3.0 for Networks and WFWG 3.11
	
	For information about how to contact Delrina, query in the Knowledge Base for one
	of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: merging option data field address message subject line attachment send sending thirdparty protocol email
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
