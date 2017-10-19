---
layout: page
title: "Q252648: XGEN: A Brief Introduction to ASN.1 and BER"
permalink: /kb/252/Q252648/
---

## Q252648: XGEN: A Brief Introduction to ASN.1 and BER

	Article: Q252648
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): ; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Abstract Syntax Notation One (ASN.1) and Basic Encoding
	Rules (BER), and clarifies the differences between the two.
	
	Many information technology workers, including seasoned professionals, are often
	confused about what ASN.1 and BER are, the differences between the two, or even
	why the distinction is important. Their confusion is understandable when even
	those people who know ASN.1 and BER well frequently use the terms incorrectly.
	
	Because ASN.1 is the language of standards, it is very common to find standards
	recommendations written in ASN.1. Support professionals, consultants, and
	information technology specialists alike benefit from knowing ASN.1 because it
	allows them to dig deep into the standards and to decode and understand the
	content of the data that they troubleshoot. The most common standards written in
	ASN.1 are those produced by the International Telegraph and Telephone
	Consultative Committee (CCITT) and the International Telecommunications Union
	(ITU). However, members of the Internet Engineering Task Force (IETF) are
	increasingly using ASN.1 to succinctly state their recommendations. ASN.1 says
	in one page what otherwise takes five or six pages to write out in some other
	format.
	
	The following is a list of commonly used standards that are written in ASN.1:
	
	- X.400 (Electronic Messaging)
	
	- X.500 (Directory Services)
	
	- X.200 (Network communications)
	
	- Request for Comments (RFCs) 2251-2256 (Lightweight Directory Access Protocol,
	  or LDAP)
	
	- Too many other RFCs to mention
	
	Any computer or data communications specialists who wishes to really set
	themselves apart need to have at least a basic understanding of ASN.1 and BER.
	Because both Microsoft Windows 2000 and Microsoft Exchange 2000 Server implement
	the above-mentioned standards in one form or another, fluency in reading and
	understanding ASN.1 and BER makes troubleshooting those two products that much
	easier.
	
	MORE INFORMATION
	================
	
	ASN.1
	-----
	
	Abstract Syntax Notation One (more commonly known as ASN.1) is a language for
	defining standards without regard to the implementation. It is the language of
	standards writers. When John Smith at CalTech wants to write a recommendation
	for standardizing the procedures that one component follows for talking to
	another component, he writes the recommendation in ASN.1 notation, and submits
	the recommendation to a standards body such as the ITU. ASN.1 facilitates
	communication between professionals and committee members by offering a common
	language for describing a standard. ASN.1 is defined in ITU-T Recommendations
	X.209 and X.690.
	
	
	For example, ASN.1 defines:
	
	- What a "type" is.
	
	- What a "module" is and how it should look.
	
	- What an INTEGER is.
	
	- What a BOOLEAN is.
	
	- What a "structured type" is.
	
	- What certain keywords mean (for example, BEGIN, END, IMPORT, EXPORT,
	  EXTERNAL, and so on).
	
	- How to "tag" a type so that it can be properly encoded.
	
	ASN.1 has no regard to any specific standard, encoding method, programming
	language, or hardware platform. It is simply a language for defining standards.
	Or in other words, standards are written in ASN.1.
	
	BER
	---
	
	BER (pronounced "burr") is the common name for the Basic Encoding Rules of ASN.1.
	BER is defined in ITU-T Recommendations X.209 and X.690. BER is one set of rules
	for encoding ASN.1 data to a stream of octets that can be transmitted over a
	communications link. Other methods of encoding ASN.1 data include Distinguished
	Encoding Rules (DER), Canonical Encoding Rules (CER), and Packing Encoding Rules
	(PER). Each encoding method has its application, but BER tends to be the
	encoding method most commonly used and most commonly talked about.
	
	BER defines:
	
	- Methods for encoding ASN.1 values.
	
	- Rules for deciding when to use a given method.
	
	- The format of specific octets in the data.
	
	Contrasting ASN.1 and BER
	-------------------------
	
	ASN.1 is like a programming language (such as C), whereas BER is like a compiler
	for that language. Compilers are platform-specific, whereas many high-level
	programming languages are not. C defines the rules and language for writing a
	program. A program is not C; it is written in C. The program is not useful until
	it is compiled for a specific platform (such as Intel x86). So it is with ASN.1
	and BER. ASN.1 is the language for writing a standard. A standard is not ASN.1;
	it is written in ASN.1. Data which is generated from a program that complies
	with the standard may loosely be termed "ASN.1 data." ASN.1 data is not useful
	(that is, it cannot be transmitted across a LAN) until the ASN.1 data is encoded
	into a stream of octets which can be easily decoded at the destination. To
	illustrate, the following is an example of these concepts derived from ITU-T
	Recommendation X.209, Appendix I. This is an informal description of a personnel
	data record:
	
	  
	
	  Name:             John P Smith
	  Date of Birth:    17 July 1959
	  (other data)
	
	The ASN.1 description of a personnel record (the standard) might be:
	
	  
	
	  PersonnelRecord ::= [APPLICATION 0] IMPLICIT SET {
	      Name,
	      title [0]       VisibleString,
	      dateOfBirth [1]          Date,
	      (other types defined)          }
	
	  Name ::= [APPLICATION 1] IMPLICIT SEQUENCE {
	      givenName       VisibleString,
	      initial         VisibleString, 
	      familyName      VisibleString  }
	
	This ASN.1 description describes what a PersonnelRecord looks like. But more
	importantly, it describes how application data should be formatted so that it
	becomes ASN.1 data before encoding takes place.
	
	Next, the application maps the personnel data into the personnel record structure
	(ASN.1 data format), and then applies the Basic Encoding Rules (BER) to the
	ASN.1 data. This is what it might look like (with the exception that the names
	would be converted to ASCII):
	
	  
	
	 Personnel
	 Record     Length   Contents
	 60         8185
	                     Name     Length  Contents
	                     61       10
	                                      VisibleString  Length  Contents
	                                      1A             04      "John"
	                                      VisibleString  Length  Contents
	                                      1A             01      "P"
	                                      VisibleString  Length  Contents
	                                      1A             05      "Smith"
	
	                      DateofBirth     Length  Contents
	                      A0              0A
	                                              Date    Length  Contents
	                                              43      08      "19590717"
	
	When all is said and done, what actually gets transmitted (or more specifically,
	what becomes the data portion for the packet at the next layer down) is:
	
	  
	
	  60 81 85 61 10 1A 04 ....
	  ....  0A 43 08 19 59 07 17
	
	REFERENCES
	==========
	
	For more information on ASN.1, consult the recommendation itself (ITU-T
	Recommendation X.208 or X.690).
	For more information on BER, consult the recommendation itself (ITU-T
	Recommendation X.209 or X.691).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbWinAdvServSearch kbExchange2000Serv
	Version           : :; winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
