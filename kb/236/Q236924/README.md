---
layout: page
title: "Q236924: MCSE Readiness Review - Exam 70-068 Windows NT Server Enterprise"
permalink: /kb/236/Q236924/
---

## Q236924: MCSE Readiness Review - Exam 70-068 Windows NT Server Enterprise

{% raw %}

	Article: Q236924
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Readiness Review Exam 70-068 Windows NT 4.0 Server Enterprise ISBN 0-7356-0539-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCSE Readiness Review Exam 70-068, Windows
	NT 4.0 Server Enterprise, ISBN 0-7356-0539-4.
	
	The following topics are covered:
	
	- Page xiii: Correction for Step 1
	
	- Page xiv: Corrections for Note
	
	- Page 41: BDC Does Not Promote Itself To PDC
	
	- Pages 49 & 50: "system policies" Should Be "account policies"
	
	- Page 104: 70-068.02.05.002 Answer Should be D
	
	- Pages 241-242: Syntax Correction In Question 70-068.05.01.005
	
	- Page 293: Pulse Parameter Is Incorrect
	
	- Page 313: Delete NETDETECT.COM From Answer Options
	
	- Page 368: Answers For Question 70-068.06.07.002 Incorrectly Labeled
	
	MORE INFORMATION
	================
	
	Page xiii: Correction for Step 1
	--------------------------------
	
	In Step 1, insert the word "Enterprise" after 'Windows NT Server 4.0'.
	
	Step 1 should read:
	From the Start menu, point to Programs, point ot MCSE Readiness Review, and then
	click (70-068) Windows NT Server 4.0 Enterprise.
	
	
	Page xiv: Corrections for Note
	------------------------------
	
	The Note in the middle of page xiv should read:
	You can always end a test without grading your electronic assessment by clicking
	Main menu and then Exit.
	
	
	Page 41: BDC Does Not Promote Itself To PDC
	-------------------------------------------
	
	On page 41, in the second paragraph, the second sentence incorrectly states that
	a BDC will promote itself as a temporary PDC. A BDC does not promote itself to
	PDC.
	
	Change:
	"If the PDC becomes unavailable, a BDC will promote itself as a temporary PDC.
	You can also manually promote a BDC to a PDC using Server Manager."
	
	To:
	"If the PDC becomes unavailable, you can promote a BDC to a PDC using Server
	Manager."
	
	
	Pages 49 & 50: "system policies" Should Be "account policies"
	-------------------------------------------------------------
	
	There are multiple instances where the term "system policies" should be replaced
	with "account policies".
	
	On page 49 in the fifth paragraph, change:
	"...set system policies so that..."
	
	To:
	"...set account policies so that..."
	
	On page 50 in the fifth paragrah, change:
	"...set system policies so that..."
	
	To:
	"...set account policies so that..."
	
	On page 50 in the first paragraph under the "Correct Answer: A" section, change:
	"...and configuring the system policy will limit..."
	
	To:
	"...and configuring the account policy will limit..."
	
	
	Page 104: 70-068.02.05.002 Answer Should be D
	---------------------------------------------
	
	The answer in the book is A, however this is incorrect. The answer should be D,
	as Windows 95 will not update the printer driver automatically.
	
	Please change:
	"A. Correct: The new driver..."
	
	To:
	"A. Incorrect: The new driver..."
	
	and also change:
	"D. Incorrect: Only the..."
	
	To:
	"D. Correct: Only the..."
	
	
	Pages 241-242: Syntax Correction In Question 70-068.05.01.005
	-------------------------------------------------------------
	
	Pages 241-242, last paragraph of question 70-068.05.01.005, first sentence:
	
	Change:
	
	"...set a capture filter for use with Network Monitor using an inclusion line of EXCLUDE TECHSRV3 <-> HR_4..."
	
	To:
	
	"...set a capture filter for use with Network Monitor using an inclusion line of EXCLUDE TECHSRV3 ? HR_4..."
	
	
	Page 293: Pulse Parameter Is Incorrect
	--------------------------------------
	
	On page 293 in question 70-068.05.05.005, the Pulse parameter in the proposed
	solution should be increased to 600. Increasing rather than decreasing the Pulse
	parameter can reduce traffic by giving the export server more time to contact
	the import computer. The default parameter is 300 seconds. If changed to 25 it
	will increase the directory replication traffic.
	
	Change:
	"The proposed solution is to install a BBC with DHCP and WINS in Amsterdam,
	change the pulse parameter to 25, and confugure both servers to be Pull
	partners."
	
	To:
	"The proposed solution is to install a BBC with DHCP and WINS in Amsterdam,
	change the pulse parameter to 600, and confugure both servers to be Pull
	partners."
	
	
	Page 313: Delete NETDETECT.COM From Answer Options
	--------------------------------------------------
	
	Question 70-068.06.02.003 lists too many options.
	
	The multiple choice answers should be:
	A. BOOT.INI
	B. NTLDR
	C. NTOSKRNL.EXE
	D. BOOTSECT.DOS
	
	
	Page 368: Answers For Question 70-068.06.07.002 Incorrectly Labeled
	-------------------------------------------------------------------
	
	Page 368, question 70-068.06.07.002, option A is correct:
	
	Change:
	"A. Incorrect:..."
	To:
	"A. Correct:..."
	
	Change:
	"D. Correct:..."
	To:
	"D. Incorrect:..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-0539-4 TKBOOK RRBOOK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
