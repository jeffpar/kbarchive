---
layout: page
title: "Q148500: XADM: Creating First/Last Names for MS Mail Custom Recipients"
permalink: /kb/148/Q148500/
---

## Q148500: XADM: Creating First/Last Names for MS Mail Custom Recipients

{% raw %}

	Article: Q148500
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Directory Synchronization between Microsoft Exchange and Microsoft
	Mail, custom recipients are created on the Microsoft Exchange side for each
	Microsoft Mail user.
	
	When you look at the properties of the created custom recipients, the Firstname
	and Lastname fields are empty. This is because, on the Microsoft Mail side, each
	account has only a Display Name and there are no separate fields for the first
	and the last names. As a result of this, when the custom recipients are created
	on the Microsoft Exchange side, there is no information available to fill the
	Firstname and Lastname fields of the custom recipients.
	
	Empty Firstname and Lastname fields can cause address resolution from the client
	to behave differently than that for Microsoft Exchange mailboxes. This might be
	noticed in the client, when the Check Names command does not bring up a list of
	all possible matches and does not find Microsoft Mail custom recipients created
	during Directory Synchronization. The reason for this is that the Check Names
	command uses the Lastname and Firstname fields for Address Resolution. For more
	information on how the Check Names command works, please refer to the following
	article:
	
	  Q147400 XCLN: How the Check Names Command Works
	
	This article describes a way to automatically parse the Display Name and then
	populate the Firstname and Lastname fields of all Microsoft Mail custom
	recipients.
	
	MORE INFORMATION
	================
	
	The process of modifying the custom recipient information involves exporting the
	custom recipient data to a text file, modifying this text file, and then
	re-importing this data back into the Microsoft Exchange directory. The steps
	below indicate how this is done.
	
	The following steps refer to Microsoft Excel 7.0. Most other spreadsheet programs
	can also be used. We assume that Directory Synchronization has been used to
	create the Microsoft Mail custom recipients and that these recipients are
	created in a recipient container called MS Mail Users. The Display name of the
	custom recipients is assumed to have the format: <FirstName>
	<LastName>
	
	1. From the Microsoft Exchange Administrator program, select the Directory
	  Export command from the Tools menu.
	
	2. Select the container that holds the MS Mail custom recipients (MS Mail
	  Users).
	
	3. Select a file to export the information to (Msmail.csv).
	
	4. In the Export Objects section, select only Custom Recipient.
	
	5. Click the Export button. This should export all the user information to the
	  file selected (Msmail.csv).
	
	6. Open the file Msmail.csv in Microsoft Excel, or any other spreadsheet that
	  can read delimited text files.
	
	7. The first line in this file should contain the object field names.
	
	  For the rest of the steps we assume that the rows are labeled numerically and
	  the columns alphabetically. In other words, the rows start from 1, and the
	  columns from A.
	
	8. Search for the field, First Name. Normally this field should be in Column B.
	  Search for the field, Last name. Normally this field should be in Column C.
	  Search for the field, Display Name. Normally this field should be in Column
	  D.
	
	9. Click on cell B2. This cell is for the First name of the first record and
	  should be empty. Type in =LEFT(D2,FIND(" ",D2)-1). Hit the Enter key. Cell B2
	  should now have the first word of the contents of Cell D2. Assuming that
	  Display Name has the format: <FirstName> <Last Name>, cell B2
	  should contain the first name of the custom recipient.
	
	10. Click on cell C2. This cell is for the Last name of the first record and
	  should be empty. Type in =RIGHT(D2,LEN(D2)-LEN(B2)-1). Hit the Enter key.
	  Assuming that Display Name has the format: <FirstName> <Last
	  Name>, cell C2 should contain the last name of the custom recipient.
	
	11. Select the cell B2. Move the mouse cursor to the bottom right corner of this
	  cell. The cursor should now change to a + (plus) sign.
	
	12. While the cursor is a + sign, hold down the left mouse button and drag the
	  cursor to the last row. Now release the left mouse button. For each row,
	  Column B should now be filled with the first name of the custom recipient
	  specified in that row.
	
	13. Select the cell C2. Move the mouse cursor to the bottom right corner of this
	  cell. The cursor should now change to a + (plus) sign.
	
	14. While the cursor is a + sign, hold down the left mouse button and drag the
	  cursor to the last row. Now release the left mouse button. For each row,
	  Column C should now be filled with the last name of the custom recipient
	  specified in that row.
	
	15. Save the file and exit out of Microsoft Excel.
	
	16. From the Microsoft Exchange Administrator program, select the Directory
	  Import command from the Tools menu.
	
	17. Select the file we just modified (Msmail.csv).
	
	18. Click the Import button.
	
	19. After the Import has completed, check the properties of the Microsoft Mail
	  custom recipients we just modified. Each custom recipient should now have
	  the First and Last name fields populated.
	
	If the Display Name is in a different format than the one assumed above
	(<FirstName> <Lastname), the formula specified in steps 9 and 10 will
	need to be modified depending on the format of the display name. The rest of the
	steps will remain the same.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
