---
layout: page
title: "Q128757: CODE COMPLETE: Corrections and Comments"
permalink: /kb/128/Q128757/
---

## Q128757: CODE COMPLETE: Corrections and Comments

	Article: Q128757
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 14-JUN-2001
	
	kbother kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Code Complete ISBN 1-55615-484-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Code Complete, ISBN 1-55615-484-4.
	
	As errors are found in our books, corrections are made so that these errors do
	not appear in future printings. The following list of corrections is broken down
	by the printing number the errors were found in. If the printing you have is
	later than the printing the error was found in, the error will not exist in your
	copy of the book.
	
	The printing number can be found on the Library of Congress page, immediately
	following the Title page. Just below the line that says "Printed and bound in
	the United States of America" are a row of numbers. The very first number is the
	printing number.
	
	The following topics are covered:
	
	- Errors Found In The First Printing
	
	- Errors Found In The Sixth Printing
	
	- Errors Found In The Tenth Printing
	
	- Errors Found After The Tenth Printing
	
	- Page 237: Add Colon Before Equal Sign in First Example
	
	MORE INFORMATION
	================
	
	Errors Found In The First Printing
	----------------------------------
	
	Page 48, 2nd paragraph, last 2 sentences:
	
	Change to:
	"IBM popularized Basic on microcomputers by including a Basic interpreter with
	the IBM PC. It is now commonly available in both interpreted and compiled
	forms."
	
	Page 48, last paragraph, line 3:
	
	Change:
	"Jim"
	
	To:
	"John"
	
	Page 96, 1st and 2nd code fragments:
	
	Change:
	"<> NULL"
	
	To:
	"<> nil"
	
	Page 176, sentences in the paragraph below the code fragment:
	
	Change:
	"In a development environment with a group of programmers, only the package
	specification would be released. It would be impossible for a programmer working
	on another package to look up the underlying type of Coordinate_t. The
	information is literally hidden."
	
	To:
	"In a development environment with a group of programmers, you could distribute
	only the package specification, which would make it harder for a programmer
	working on another package to look up the underlying type of Coordinate_t. The
	information would literally be hidden."
	
	Page 204, code fragment at bottom of page. Two lines should have "i"s added to
	read:
	
	     ipaReformat = ipaFirstReformat;
	     ipaReformat <= ipaLastReformat;
	
	Page 205, first paragraph, first line:
	
	Change:
	"paLimReformat"
	
	To:
	"ipaLimReformat"
	
	Change:
	"paLastReformat"
	
	To:
	"ipaLastReformat"
	
	Page 205, first code line:
	
	Change:
	"paLimReformat"
	
	To:
	"ipaLimReformat"
	
	Page 205, second code line:
	
	Change:
	"paLastReformat"
	
	To:
	"ipaLastReformat"
	
	Pages 256-7. The code fragment that begins on page 256 and continues on page 257
	should be replaced with the following:
	
	  void insert_link
	     (
	     NODE * CrntNode,
	     NODE * InsertNode
	     )
	     {
	     /* insert "InsertNode" after "CrntNode" */ 
	
	     InsertNode->Next = CrntNode->Next;
	     InsertNode->Previous  = CrntNode;
	
	     if ( CrntNode->Next != NULL )
	        {
	        CrntNode->Next->Previous = InsertNode;
	        }
	     CrntNode->Next = InsertNode;
	     }
	
	Page 257, first paragraph, sixth line:
	
	Change:
	"CrntNode.Next"
	
	To:
	"CrntNode->Next"
	
	Pages 257-8, change the code fragment that begins on the bottom of the page and
	continues onto the next page to:
	
	  void insert_link
	     (
	     NODE * StartNode,
	     NODE * NewMiddleNode
	     )
	     {
	     NODE * FollowingNode;
	
	     /* insert "NewMiddleNode" between "StartNode" and "FollowingNode */ 
	
	     FollowingNode = StartNode->Next;
	     NewMiddleNode->Next = FollowingNode;
	     NewMiddleNode->Previous = StartNode;
	     if ( FollowingNode != NULL )
	        {
	        FollowingNode->Previous = NewMiddleNode;
	        }
	     StartNode->Next = NewMiddleNode;
	     }
	
	Page 258, first paragraph, second line:
	
	Change:
	"CrntNode.Next.Previous"
	
	To:
	"CrntNode->Next->Previous"
	
	Page 332, second code fragment:
	
	Change:
	"InputRec[ RecCount ]"
	
	To:
	"InputRec[ RecCount-1 ]"
	
	Page 461, code fragment at bottom of page:
	
	4th line change:
	"Sum := 0;"
	
	To:
	"Sum := 1;"
	
	8th line should be deleted:
	"OldSum := Sum;"
	
	11th line change:
	"Crnt := OldSum;"
	
	To:
	"Crnt := Sum;"
	
	Page 471, second code fragment:
	
	Change:
	"MaxPos := Length( InputStr );"
	
	To:
	"MaxLen := Length( InputStr );"
	
	Page 701, line of code inside the for loop at the top of the page:
	
	Change:
	"Quantity"
	
	To:
	"Net"
	
	Page 709:
	
	The code fragment at the bottom of the page, in the comment line, the order of
	the "BC" pairs should be changed to read:
	"/* !B!C !BC B!C BC */"
	
	In the line below the comment line, the "0, 2, 3, 2" sequence should read:
	"0, 3, 2, 2"
	
	In the line below that one, the "1, 1, 2, 1" sequence should read:
	"1, 2, 1, 1"
	
	Page 719, code fragment at bottom of page, 3rd line:
	
	Change:
	"Value = Value + Coefficient( Power ) * x"
	
	To:
	"Value = ( Value + Coefficient( Power ) ) * x"
	
	Page 734:
	
	The page numbers in the table are wrong and should be corrected. They are all off
	by 4. To get the right page number, take the current page number and subtract
	4.
	
	Page 802, first full paragraph from the bottom of the page, last sentence:
	
	Change:
	"To get a copy of his report..."
	
	To:
	"A copy of the report is included as an appendix to Decline & Fall of the
	American Programmer (Yourdon 1992)."
	
	Page 803:
	
	Change the paragraph that begins with:
	"Computer Language"
	
	To:
	"Software Development".
	
	Change the phone number in the same paragraph from:
	"800-288-1322"
	
	To:
	"800-950-0523"
	
	Page 826, after the paragraph that begins "Yourdon, Edward, 1989b" insert the
	following new paragraph:
	
	"Yourdon, Edward, 1992. Decline & Fall of the American Programmer. Englewood
	Cliffs, N.J.: Yourdon Press."
	
	Page 838:
	
	Index entries for "flawchart" should be added. The only time it's referenced is
	on page 57.
	
	Page 849:
	
	The entry for The Psychology of Computer Programming should have page number 771
	added.
	
	Page 853:
	
	The index entries for the books Software Tools and Software Tools in Pascal are
	missing and should be added. The page references are as follows:
	
	Software Tools, 497, 511-12
	Software Tools in Pascal, 497, 511-12
	
	Errors Found In The Sixth Printing
	----------------------------------
	
	Page 313, code fragment, second line:
	
	Change:
	"<"
	
	To:
	"<>"
	
	Page 395, last paragraph:
	
	Delete the phrase:
	"described in Table 17-2,"
	
	At the end of the paragraph, add the sentence:
	"Table 17-2 describes a method for counting decision points."
	
	Page 395, last line of the table:
	
	Delete the sentence:
	"If the case statement doesn't have a default case, add 1 more."
	
	Page 455, second code example, second block of code, change the following:
	
	- The "for" line should have a "begin" appended to the end.
	
	- The "begin" in line 4 of the block should be moved to the end of the
	  preceding line.
	
	- The "end" currently at the end of the block should be outdented to left align
	  with the "while" above it.
	
	- At the end of that block, after the first "end;", a line should be inserted
	  with another "end;". The new "end;" should be left aligned with the "for"
	  above it.
	
	The result of the above changes should look like:
	
	       for Factor := 2 to Num / 2 do begin
	          FactorableNumber := Factor + Factor;
	          while ( FactorableNumber <= Num ) do begin
	             IsPrime[ FactorableNumber ] := False;
	             FactorableNumber := FactorableNumber + Factor;
	          end;
	       end;
	
	Errors Found In The Tenth Printing
	----------------------------------
	
	Page 332, code fragment 2:
	
	Change:
	"fgets( InputRec[ RecCount - 1 ], MAX_CHARS, InFile )"
	
	To:
	"fgets( InputRec[ RecCount - 1 ], MAX_CHARS, InFile ))"
	
	
	Page 347, paragraph 3, sentence 1:
	
	Change:
	"...that don't support structured controls correctly."
	
	To:
	"...that don't support structured control constructs correctly."
	
	
	Page 540, Table 22-1, Possible Range of Factor's Influence column:
	
	Change:
	"1.40"
	
	To:
	"1.49"
	
	
	Page 562, margin quote:
	
	Change:
	"Andy Grove"
	
	To:
	"Tom Peters"
	
	
	Page 707, bullet 4, sentence 1:
	
	Change:
	"...put a negative sentinel value in the first element past the end of the
	array..."
	
	To:
	"...put a negative sentinel value in the first array element after the last valid
	data entry..."
	
	
	Page 708, paragraph 1, sentence 2:
	
	Change:
	"...the effect is the same as if..."
	
	To:
	"...the effect is often the same as if..."
	
	
	Errors Found After The Tenth Printing
	-------------------------------------
	
	Page xviii:
	
	Change:
	"parctices"
	
	To:
	"practices"
	
	Change:
	"thatn"
	
	To:
	"that"
	
	Change email address to:
	"stevemcc@construx.com"
	
	
	Page 240, 2nd left margin note:
	
	Change:
	"Sum is computed as 10*1.0."
	
	To:
	"Sum is computed as 10*0.1."
	
	
	Page 241, 6th paragraph, 2nd sentence:
	
	Change to:
	"The BCD scheme is slower and takes up more storage space but prevents many
	common rounding errors."
	
	
	Page 443, first example:
	
	Change the semicolons to commas:
	
	  BOOLEAN ReadEmployeeData
	  	(
	  	int			MaxEmployees,
	  	EMP_LIST *		Employees,
	  	FILE *			InputFile,
	  	int * 			EmployeeCount,
	  	BOOLEAN *		IsInputError
	  	)
	
	
	Page 462, 2nd code example, third line:
	
	Change:
	"<"
	
	To:
	">"
	
	
	Page 574:
	
	Change the two references from:
	"(Freedman and Weinberg 1982)"
	
	To:
	"(Freedman and Weinberg 1990)"
	
	
	Page 237: Add Colon Before Equal Sign in First Example
	------------------------------------------------------
	
	On page 237, the first code sample (Pascal) should use := instead of =
	
	Change:
	
	  x = a + float( i )
	
	To:
	
	  x := a + float( i )
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-55615-484-4 DEVBOOK
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
