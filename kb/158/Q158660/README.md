---
layout: page
title: "Q158660: LEARN JAVA NOW Corrections and Comments"
permalink: /kb/158/Q158660/
---

## Q158660: LEARN JAVA NOW Corrections and Comments

	Article: Q158660
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Learn Java Now ISBN 1-57231-428-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Learn Java Now."
	
	The following topics are covered:
	
	- Page xviii is missing (duplicate of page xvii present)
	
	- Page 4: Change in dialog box
	
	- Page 139: Error in code fragment
	
	- Page 164: Input quoted in text does not match screen shot
	
	- Pages 167 & 170: Code error
	
	- Page 338: No yellow sticker present with CD key
	
	- CD-ROM: Setup will not run in Windows 3.11 or earlier
	
	- CD-ROM: Known Setup program issues
	
	- CD-ROM: Differences between Pub. Ed. VJ++ and Visual J++ 1.0
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	Page xviii is missing (duplicate of page xvii present)
	------------------------------------------------------
	
	Page xvii is repeated where page xviii should be. Below is the text that should
	appear on page xviii:
	
	***** BEGIN PAGE XVIII TEXT *****
	
	price. The C++ language is extremely complex. As it bends and twists to remain
	compatible with a language designed almost 30 years ago, C++ gets caught up in
	some syntactic morasses.
	
	The designers of Java decided to drop backward compatibility with C in favor of
	simplicity. This has allowed the Java language to adopt a much simpler, more
	consistent style, somewhat reminiscent of Smalltalk. (If you are not familiar
	with C++ or Smalltalk, don't worry--it's not a requirement for this book.) It is
	a good all-around language with or without the Web.
	
	Who This Book Is For
	--------------------
	
	This is not a book about authoring World Wide Web home pages. I assume that you
	know how to access and use the Web. All this really means is that you know which
	is the working end of your browser. I don't assume that you know anything much
	about HTML. (I will teach you the very minimum you'll need to get your Java
	applet installed in an HTML page and executing.)
	
	I will teach you about Java programming using Microsoft's Visual J++ development
	environment. I assume that you are familiar with the concepts of programming,
	but I don't assume that your background is in a particular language. I welcome
	C, C++, and Visual Basic programmers alike. We'll even make room for an
	assembler programmer or two.
	
	Conventions Used in This Book
	-----------------------------
	
	I have found that adopting a standard coding style makes programs easier to
	understand and, therefore, easier to write. I have pretty much adopted the
	Microsoft Hungarian naming convention in my programming style, as shown in table
	I-1.
	
	***** END PAGE XVIII TEXT *****
	
	Page 4: Change in dialog box
	----------------------------
	
	Page 4, paragraph 5:
	Change: "Select the Run Class As Application button, and then click OK."
	To: "Select the Stand-alone Interpreter option button and enter App1_1 as the
	class filename, and then click OK."
	
	
	Page 139: Error in code fragment
	--------------------------------
	
	On page 139, in the two 'class MyClass' code fragments, the following line:
	
	  LinkedList ba = ll.Data();    // this is not allowed
	
	should read as follows:
	
	  BankAccount ba = ll.Data();    // this is not allowed
	
	The second 'class MyClass' code fragment should have this line change as well.
	
	Page 164: Input quoted in text does not match screen shot
	---------------------------------------------------------
	
	Correction:
	Page 164, paragraph 2, sentence 2:
	Change: "I entered Learn Java Now..."
	To: "I entered Hello, World..."
	
	Pages 167 & 170: Code error
	---------------------------
	
	Page 167, code fragment:
	Insert line: bout.flush();
	Code should read as follows:
	
	  ...
	        // write that many bytes back out starting
	        // at offset 0 in the array
	        bout.write(bArray, 0, nBytesRead);
	     }
	     bout.flush();
	  }
	  ...
	
	Page 170, code fragment: Insert line: bout.flush(); Code should read as follows:
	
	  ...
	   
	           pout.print(c);
	        }
	        pout.println(" ");
	   
	     }
	     bout.flush();
	   
	  }
	  ...
	
	Note: The code included on the CD-ROM in the files FileIO\FileIO.java and
	FileIO2\FileIO.java is correct.
	
	Page 338: No yellow sticker present with CD key
	-----------------------------------------------
	
	Page 338 states that the CD key for Visual J++ is not optional and is located on
	a yellow sticker contained within the CD crystal.
	
	If you are using the full version of Microsoft Visual J++, the CD key is located
	on a yellow sticker on the back of the CD-ROM jewel case.
	
	If you are using the Publisher's Edition of Microsoft Visual J++, included with
	the "Learn Java Now" book, the CD key is not necessary. The input box for the CD
	key is grayed out and includes a number of X's. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q171304 Learn Java Now: VJ++ Setup: No CD-Key Included With Book
	
	CD-ROM: Setup will not run in Windows 3.11 or earlier
	-----------------------------------------------------
	
	Microsoft Visual J++ will only run under Microsoft Windows 95 or Microsoft Window
	NT 3.51 or later. The setup program will fail if the program is run on any
	earlier versions of Microsoft Windows or MS-DOS.
	
	Microsoft does not currently publish a Java compiler that is compatible with
	Microsoft Windows 3.1 or MS-DOS. For further information on future Java and J++
	developments, please see the following Web sites:
	
	  http://www.microsoft.com/java/
	  http://www.microsoft.com/visualj/
	
	CD-ROM: Known Setup program issues
	----------------------------------
	
	If you have Microsoft Internet Explorer 3.0, after selecting the directory where
	you want Microsoft Visual J++ to be installed, you will see the following
	message:
	
	  "Visual J++ requires the installation of Internet Explorer 3.0 with Java
	  support. Setup will now install Internet Explorer 3.0."
	
	This message will appear in a dialog box with only one button, labeled
	"Install."
	
	This is not an error. The original release of Microsoft Internet Explorer 3.0 did
	not contain several files needed for Java and Microsoft Visual J++
	compatibility. The setup program for Microsoft Visual J++ will install only
	those files necessary to run Java and Microsoft Visual J++ applets using
	Microsoft Internet Explorer 3.0.
	
	This installation should not interfere with any proxy servers or settings
	included in the Microsoft Internet Explorer 3.0 installation.
	
	If Microsoft Internet Explorer 3.0 is not already installed, the Microsoft Visual
	J++ setup program will install Internet Explorer in its entirety.
	
	CD-ROM: Differences between Pub. Ed. VJ++ and Visual J++ 1.0
	------------------------------------------------------------
	
	The Publisher's Edition of Microsoft Visual J++ 1.0, included on the CD-ROM with
	"Learn Java Now," differs slightly from the regular version of Microsoft Visual
	J++ 1.0.
	
	- The Setup program in the Publisher's Edition only allows a Typical
	  installation of the program. All other installations (Custom and Minimal) are
	  unavailable.
	
	- The Publisher's Edition does not support RDO or DAO database objects.
	
	  The editions are identical in all other respects.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug LJN 1.00 Visual J++ Visual Java
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
