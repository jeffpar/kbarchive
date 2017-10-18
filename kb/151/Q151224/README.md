---
layout: page
title: "Q151224: Inconsistent CRC or Checksum Values on Large Applications"
permalink: kb/151/Q151224/
---

## Q151224: Inconsistent CRC or Checksum Values on Large Applications

	Article: Q151224
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,1.2
	Operating System(s): 
	Keyword(s): kbusage kbdocerr kbsmsAdmin smsadmin smshowto smsdocerr
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Large application executable files can return different cyclic redundancy check
	(CRC) values due to unique product identification stamping that occurs when the
	application is installed. To avoid this inconsistent result, you must provide an
	offset that starts the CRC calculation past this unique data. This also applies
	to the calculation of Checksum values.
	
	WORKAROUND
	==========
	
	To calculate a CRC or Checksum with the SMS Administrator, do the following:
	
	1. Create a new package and click the Inventory button.
	
	2. Select "Add AND..." or "Add OR...".
	
	3. In the File Properties window, click the ellipse button (...) to the right of
	  File Name.
	
	4. Browse to and select the file you want to calculate the CRC or Checksum of.
	
	5. Choose "Checksum" or "CRC" from the Properties Available list and click
	  Add>.
	
	6. Enter a value in the At Byte field. This is the data offset, or byte
	  position, within the file where the algorithm will begin calculating the sum.
	
	7. Enter a value for the Length field. This is the total number of bytes that
	  are summed.
	
	8. Click the Retrieve button. The value displayed in the CRC-16 (or Checksum)
	  field is your result.
	
	The values calculated here can be used to customize your Audit.rul file. For more
	information on Software auditing, see Chapter 6, page 217 of the "SMS
	Administrator's Guide."
	
	NOTE: This documentation mentions the Filetokn.exe utility which was not included
	with SMS 1.1. Use the steps listed above to perform the same functions.
	
	
	Generally, an offset of 10,000 and a length of 10,000 to 50,000 will return a
	consistent value for most large executable files. Don't forget to consider that
	the larger the values for the length, the longer it will take to calculate. To
	really be certain that the value you calculate does not contain any unique data,
	calculate the CRC or Checksum on the executable file installed from two
	installations of the same application.
	
	MORE INFORMATION
	================
	
	Large applications like Microsoft Word or even applications from other software
	developers will often contain a unique product ID stamp at the beginning and/or
	end of the file data.
	
	For example, Microsoft Word 7.0 uses WINWORD.EXE which is 3,845,120 bytes in
	size. This file contains unique data within the first 225 bytes of the file and
	also in the last 245K of the file. In order to retrieve a consistent CRC or
	Checksum value, use an offset or "At Byte" of at least 250 and a length of one
	to 3,500,000. This will return the same value for every installation of
	Microsoft Word 7.0.
	
	Additional query words: CRC Checksum FILETOKN.EXE value prodsms
	
	======================================================================
	Keywords          : kbusage kbdocerr kbsmsAdmin smsadmin smshowto smsdocerr 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : :1.1,1.2
	
	=============================================================================
	
