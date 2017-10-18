---
layout: page
title: "Q203488: WD97: File Corruption Error Starting Multiple Instances of Word"
permalink: kb/203/Q203488/
---

## Q203488: WD97: File Corruption Error Starting Multiple Instances of Word

	Article: Q203488
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start multiple instances of Microsoft Word 97 rapidly in succession,
	the following error message may appear:
	
	  Word encountered file corruption while opening c:\Program
	  Files\...Normal.dot. Part of this document may be recoverable. Attempt
	  recovery now?
	
	You can click NO to start Word. The Normal template (Normal.dot) is not damaged.
	
	CAUSE
	=====
	
	This error message appears because the first instance of Word has not fully
	initialized when the second instance of Word is started.
	
	When you start Word, an entry is written to the Windows registry indicating that
	the program has started. After Word is fully initialized, the registry entry is
	removed. Word uses this registry entry to determine whether the initialization
	process failed or succeeded. If the entry exists in the registry, Word
	determines that the initialization of the first instance of Word failed and
	displays the error message. If the entry does not exist, Word determines that
	the initialization process succeeded, and no error message appears.
	
	WORKAROUND
	==========
	
	To work around this problem, wait until the first instance of Word has finished
	initializing before starting the second instance.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: boot booting launch launching initiated corrupt corrupting corrupted damaging bad invalid
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
