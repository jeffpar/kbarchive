---
layout: page
title: "Q109583: PRB: SQL SELECT Causes ICE or &quot;Invalid Function Argument...&quot;"
permalink: kb/109/Q109583/
---

## Q109583: PRB: SQL SELECT Causes ICE or &quot;Invalid Function Argument...&quot;

	Article: Q109583
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following SQL SELECT statement causes an "Internal Consistency Error" in
	FoxPro for Windows and FoxPro for MS-DOS. In FoxPro for Macintosh, the SELECT
	statement causes the error message "Invalid function argument value, type, or
	count."
	
	This code creates the tables on which to perform the SELECT statement:
	
	     CREATE TABLE customer ;
	        ( cno C(5), company C(35), contact C(20), ;
	        address C(30), city C(15), state C(2), zip C(5), ;
	        phone C(12), ono C(1), ytdpurch N(8,2), lat N(7,4), ;
	        long N(8,4) )
	
	     CREATE TABLE invoices ;
	        ( ino N(4), cno C(5), idate D, itotal N(8), ;
	        salesman C(3) )
	
	     CREATE TABLE detail ;
	        ( ino N(6), cno C(5), LINE N(4), qty N(4), ;
	        pno C(5), price N(8), ltotal N(8) )
	
	     INSERT INTO customer (cno, company, contact, address, ;
	        city, state, zip, ;
	        phone, ono, ytdpurch, lat, long) ;
	        VALUES ('a123', '1st Company', 'No Name', 'One Microsoft Way', ;
	        'Redmond', 'WA', '98052', '1206123456', '1', ;
	        1000.99, 100.999, 100.999)
	
	     INSERT INTO invoices (ino, cno, idate, itotal, salesman) ;
	        VALUES (9999, 'A123', {09/01/93}, 1000.99, 'Bob')
	
	     INSERT INTO detail (ino, LINE, qty, pno, price, ltotal) ;
	        VALUES (9999, 1234, 2,'B6722', 27.99, 57.98)
	
	  This is the code that produces the error:
	
	     SELECT IIF(customer.cno = invoices.cno,SPACE(8),;
	        one(detail.ino, company, lat)) AS test;
	        FROM customer,invoices,detail;
	        INTO CURSOR two;
	        WHERE customer.cno = invoices.cno;
	        ORDER BY 1
	
	     PROCEDURE one
	     PARAMETERS A,B,C
	     RETURN SPACE(8)
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin iif ice crash errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
