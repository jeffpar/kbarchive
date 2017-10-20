---
layout: page
title: "Q106469: WD97: Word Accesses Mail Merge Data File Frequently"
permalink: /kb/106/Q106469/
---

## Q106469: WD97: Word Accesses Mail Merge Data File Frequently

{% raw %}

	Article: Q106469
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Word for Windows accesses the data document in a mail merge main document each
	time you reactivate the main document window. Word may access the data document
	when you return to Word from another program (this does not happen every time).
	Sometimes it takes a long time for Word to open the data document and access the
	current data record, especially if your data document is large.
	
	For example, if you switch to a non-mail-merge document window or if you switch
	to a different program such as Microsoft Excel, and then switch back to the mail
	merge main document, Word accesses the data file. Word displays the following
	message on the status bar:
	
	  Opening <data filename> in <program name>.
	
	CAUSE
	=====
	
	When you activate a mail merge main document, Word maintains a constant
	reference to the most recently used record in the data document, which requires
	Word to access the data file frequently. Word does this so the most up-to-date
	values always display. This means that if someone changes the data file record
	in the source program, Word automatically displays the new information in your
	main document.
	
	WORKAROUND
	==========
	
	Use the following suggestions to minimize the time you have to wait for Word to
	access your data document:
	
	- Avoid unnecessarily switching from one document to another. This decreases
	  the number of times Word accesses the data document.
	
	- If you anticipate frequent switching from one document to another, activate
	  record 1 in your main document. This eliminates the time you have to wait for
	  Word to go from record 1 to the active record.
	
	- Temporarily restore your main document to a normal Word document while you do
	  tasks that require you to switch from one program to another or from one
	  document to another. As a normal document, Word no longer spends time
	  accessing the data document. After you finish the tasks that require frequent
	  switching, you can reattach the data document.
	
	  To restore your main document to a normal Word document, follow these steps:
	
	  1. On the Tools menu, click Mail Merge.
	
	  2. Click Create.
	
	  3. In the list that appears, click Restore To Normal Word Document.
	
	  4. Click Yes to the message that appears.
	
	- If Word is accessing your data document using Dynamic Data Exchange (DDE),
	  leave the data source program open. This eliminates the time you have to wait
	  for the program to open each time Word accesses the data document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Below is the process Word uses to open mail merge data documents and access the
	current data record.
	
	Data File Attached Using DDE (Dynamic Data Exchange)
	----------------------------------------------------
	
	1. Word determines whether the source program is running (for example, if your
	  data document is a Microsoft Access database, Word checks to see if Microsoft
	  Access is running).
	
	2. If not, Word starts the source program and loads the data file.
	
	3. Word retrieves the data for the current record, starting from record 1, using
	  a DDE link.
	
	Data File Attached Using Open Database Connectivity (ODBC)
	----------------------------------------------------------
	
	1. Word opens the data file using the ODBC driver.
	
	2. Word retrieves the data for the current record, starting from record 1.
	
	Data File Attached Using Converter
	----------------------------------
	
	1. Word opens the file using the external file converter.
	
	2. Word retrieves the data for the current record, starting from record 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
